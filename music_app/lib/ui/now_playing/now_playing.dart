import 'dart:math';
import 'package:audio_video_progress_bar/audio_video_progress_bar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:just_audio/just_audio.dart';
import 'package:music_app/ui/now_playing/add_music.dart';
import 'package:music_app/ui/now_playing/audio_player_manager.dart';
import 'package:provider/provider.dart';
import '../../data/model/song.dart';
import '../../data/model/duration_state.dart';
import '../../widgets/media_button_control.dart';
import '../account/user_provider.dart';

class NowPlaying extends StatelessWidget {
  const NowPlaying({super.key, required this.songs, required this.playingSong});

  final Song playingSong;
  final List<Song> songs;

  @override
  Widget build(BuildContext context) {
    return NowPlayingPage(
      songs: songs,
      playingSong: playingSong,
    );
  }
}

class NowPlayingPage extends StatefulWidget {
  const NowPlayingPage(
      {super.key, required this.songs, required this.playingSong});

  final Song playingSong;
  final List<Song> songs;

  @override
  State<NowPlayingPage> createState() => _NowPlayingPageState();
}

Future<void> _dialogBuilder(BuildContext context, Song currentSong) {
  return showDialog<void>(
    context: context,
    builder: (context) {
      return AlertDialog(
        content: AddMusic(currentSong: currentSong),
      );
    },
  );
}

class _NowPlayingPageState extends State<NowPlayingPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _imageAnimaController;
  late AudioPlayerManager _audioPlayerManager;

  late int _selectItemIndex;
  late Song _song;
  late double _currentAnimationPosition = 0.0;
  bool _isShuffle = false;
  late LoopMode _loopMode;

  @override
  void initState() {
    super.initState();
    _song = widget.playingSong;
    _selectItemIndex = widget.songs.indexOf(_song);
    _imageAnimaController = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 12000));

    WidgetsBinding.instance.addPostFrameCallback((_) {
      final userProvider = Provider.of<UserProvider>(context, listen: false);
      userProvider.checkUserLoggedIn();
    });

    _audioPlayerManager =
        Provider.of<AudioPlayerManager>(context, listen: false);

    if (_audioPlayerManager.songUrl.compareTo(_song.source) != 0) {
      _audioPlayerManager.updateSongUrl(_song.source);
      _audioPlayerManager.prepare(isNewSong: true);
    } else {
      _audioPlayerManager.prepare(isNewSong: false);
    }
    _loopMode = LoopMode.off;
  }

  @override
  Widget build(BuildContext context) {
    final screenWith = MediaQuery.of(context).size.width;
    const delta = 64;
    final radius = (screenWith - delta.w) / 2;

    final userProvider = Provider.of<UserProvider>(context);

    return CupertinoPageScaffold(
      navigationBar: CupertinoNavigationBar(
        middle: const Text("Now Playing"),
        trailing: IconButton(onPressed: () {}, icon: const Icon(Icons.more_horiz)),
      ),
      child: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(height: 25.h),
              Text(_song.album),
              SizedBox(height: 5.h),
              const Text("_ ___ _"),
              SizedBox(height: 10.h),
              RotationTransition(
                turns: Tween(begin: 0.0, end: 1.0).animate(_imageAnimaController),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(radius),
                  child: FadeInImage.assetNetwork(
                    placeholder: "assets/img_err.png",
                    image: _song.image,
                    width: (screenWith - delta.w),
                    height: (screenWith - delta.w),
                    imageErrorBuilder: (context, error, stackTrace) {
                      return Image.asset(
                        "assets/img_err/png",
                        width: (screenWith - delta.w),
                        height: (screenWith - delta.w),
                      );
                    },
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.only(top: 64.h, bottom: 16.h),
                child: SizedBox(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.share_outlined),
                        color: Theme.of(context).colorScheme.primary,
                      ),
                      Column(
                        children: [
                          Text(
                            _song.title,
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium!
                                .copyWith(color: Theme.of(context).textTheme.bodyMedium!.color),
                          ),
                          SizedBox(height: 8.h),
                          Text(
                            _song.artist,
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium!
                                .copyWith(color: Theme.of(context).textTheme.bodyMedium!.color),
                          )
                        ],
                      ),
                      userProvider.currentUser != null
                          ? IconButton(
                        onPressed: () {
                          _dialogBuilder(context, _song);
                        },
                        icon: const Icon(Icons.favorite_outline),
                        color: Theme.of(context).colorScheme.primary,
                      )
                          : IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.favorite),
                        color: Theme.of(context).colorScheme.primary,
                      )
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.only(
                  top: 32.h,
                  left: 24.w,
                  right: 24.w,
                  bottom: 16.h,
                ),
                child: _progressBar(),
              ),
              Padding(
                padding: EdgeInsets.symmetric(
                  horizontal: 24.w,
                ),
                child: _mediaButton(),
              )
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _imageAnimaController.dispose();
    super.dispose();
  }

  Widget _mediaButton() {
    return SizedBox(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          MediaButtonControl(
            function: _setShuffle,
            icon: Icons.shuffle,
            color: _getShuffleColor(),
            size: 24.sp, // scale theo font
          ),
          MediaButtonControl(
            function: _setPrevSong,
            icon: Icons.skip_previous,
            color: Colors.deepPurple,
            size: 36.sp,
          ),
          _playButton(),
          MediaButtonControl(
            function: _setNextSong,
            icon: Icons.skip_next,
            color: Colors.deepPurple,
            size: 36.sp,
          ),
          MediaButtonControl(
            function: _setupRepeatOption,
            icon: _repeatingIcon(),
            color: _getRepeatingIconColor(),
            size: 24.sp,
          ),
        ],
      ),
    );
  }

  StreamBuilder<DurationState> _progressBar() {
    return StreamBuilder<DurationState>(
      stream: _audioPlayerManager.durationState,
      builder: (context, snapshot) {
        final durationState = snapshot.data;
        final progress = durationState?.progress ?? Duration.zero;
        final buffered = durationState?.buffered ?? Duration.zero;
        final total = durationState?.total ?? Duration.zero;

        return ProgressBar(
          progress: progress,
          total: total,
          buffered: buffered,
          onSeek: _audioPlayerManager.player.seek,
          barHeight: 5.h, // scale theo chiều cao màn hình
          barCapShape: BarCapShape.round,
          baseBarColor: Colors.grey.withOpacity(0.3),
          progressBarColor: Colors.green,
          bufferedBarColor: Colors.grey.withOpacity(0.3),
          thumbColor: Colors.deepPurple,
          thumbGlowColor: Colors.green.withOpacity(0.3),
          thumbRadius: 10.r, // scale radius
        );
      },
    );
  }

  StreamBuilder<PlayerState> _playButton() {
    return StreamBuilder(
      stream: _audioPlayerManager.player.playerStateStream,
      builder: (context, snapshot) {
        final playState = snapshot.data;
        final processingState = playState?.processingState;
        final playing = playState?.playing;
        if (processingState == ProcessingState.loading ||
            processingState == ProcessingState.buffering) {
          _pauseRotationAnim();
          return Container(
            margin: EdgeInsets.all(8.w), // scale padding theo chiều ngang
            width: 48.w,
            height: 48.w,
            child: const CircularProgressIndicator(),
          );
        } else if (playing != true) {
          return MediaButtonControl(
            function: () {
              _audioPlayerManager.player.play();
              _imageAnimaController.forward(from: _currentAnimationPosition);
              _imageAnimaController.repeat();
            },
            icon: Icons.play_arrow,
            color: null,
            size: 48.w,
          );
        } else if (processingState != ProcessingState.completed) {
          _playRotationAnim();
          return MediaButtonControl(
            function: () {
              _audioPlayerManager.player.pause();
              _pauseRotationAnim();
            },
            icon: Icons.pause,
            color: null,
            size: 48.w,
          );
        } else {
          if (processingState == ProcessingState.completed) {
            _stopRotationAnim();
            _resetRotationAnim();
          }
          return MediaButtonControl(
            function: () {
              _resetRotationAnim();
              _playRotationAnim();
              _audioPlayerManager.player.seek(Duration.zero);
            },
            icon: Icons.replay,
            color: null,
            size: 48.w,
          );
        }
      },
    );
  }

  void _setShuffle() {
    setState(() {
      _isShuffle = !_isShuffle;
    });
  }

  Color? _getShuffleColor() {
    return _isShuffle ? Colors.deepPurple : Colors.grey;
  }

  void _setNextSong() {
    if (_isShuffle) {
      var random = Random();
      _selectItemIndex = random.nextInt(widget.songs.length);
    } else if (_selectItemIndex < widget.songs.length - 1) {
      ++_selectItemIndex;
    } else if (_loopMode == LoopMode.all &&
        _selectItemIndex == widget.songs.length - 1) {
      _selectItemIndex = 0;
    }

    final nextSong = widget.songs[_selectItemIndex];

    _audioPlayerManager.updateSongUrl(nextSong.source);
    _audioPlayerManager.prepare(isNewSong: true); // Chuẩn bị cho bài hát mới
    _audioPlayerManager.player.play(); // Phát bài hát mới

    _resetRotationAnim();
    setState(() {
      _song = nextSong;
    });
  }

  void _setPrevSong() {
    if (_isShuffle) {
      var random = Random();
      _selectItemIndex = random.nextInt(widget.songs.length);
    } else if (_selectItemIndex > 0) {
      --_selectItemIndex;
    } else if (_loopMode == LoopMode.all && _selectItemIndex == 0) {
      _selectItemIndex = widget.songs.length - 1;
    }
    final prevSong = widget.songs[_selectItemIndex];
    _audioPlayerManager.updateSongUrl(prevSong.source);

    _audioPlayerManager.prepare(isNewSong: true); // Chuẩn bị cho bài hát mới
    _audioPlayerManager.player.play(); // Phát bài hát mới

    _resetRotationAnim();
    setState(() {
      _song = prevSong;
    });
  }

  void _setupRepeatOption() {
    if (_loopMode == LoopMode.off) {
      _loopMode = LoopMode.one;
    } else if (_loopMode == LoopMode.one) {
      _loopMode = LoopMode.all;
    } else {
      _loopMode = LoopMode.off;
    }
    setState(() {
      _audioPlayerManager.player.setLoopMode(_loopMode);
    });
  }


  IconData _repeatingIcon() {
    switch (_loopMode) {
      case LoopMode.one:
        return Icons.repeat_one;
      case LoopMode.all:
        return Icons.repeat_on;
      default:
        return Icons.repeat;
    }
  }

  Color? _getRepeatingIconColor() {
    return _loopMode == LoopMode.off ? Colors.grey : Colors.deepPurple;
  }

  void _playRotationAnim() {
    // Đảm bảo việc gọi animation chỉ xảy ra sau khi frame hiện tại hoàn tất
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _imageAnimaController.forward(from: _currentAnimationPosition);
      _imageAnimaController.repeat();
    });
  }

  void _pauseRotationAnim() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _stopRotationAnim();
      _currentAnimationPosition = _imageAnimaController.value;
    });
  }

  void _stopRotationAnim() {
    _imageAnimaController.stop();
  }

  void _resetRotationAnim() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _currentAnimationPosition = 0.0;
      _imageAnimaController.value = _currentAnimationPosition;
    });
  }
}


