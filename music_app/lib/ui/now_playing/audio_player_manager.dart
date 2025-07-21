import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:just_audio/just_audio.dart';
import 'package:rxdart/rxdart.dart';

import '../../data/model/duration_state.dart';

class AudioPlayerManager with ChangeNotifier {

  final AudioPlayer player = AudioPlayer();

  Stream<DurationState>? durationState;
  String songUrl = "";
  bool isPlaying = false;


  void prepare({bool isNewSong = false}) {
    // Kết hợp các stream để theo dõi thời gian phát
    durationState = Rx.combineLatest2<Duration, PlaybackEvent, DurationState>(
      player.positionStream,
      player.playbackEventStream,
          (position, playbackEvent) => DurationState(
        progress: position,
        buffered: playbackEvent.bufferedPosition,
        total: playbackEvent.duration,
      ),
    );

    if (isNewSong) {
      _loadNewSong();
    }
  }

  Future<void> _loadNewSong() async {
    if (songUrl.isNotEmpty) {
      try {
        await player.setUrl(songUrl);
        if (isPlaying) {
          await player.play();
        }
      } catch (e) {
        print("Error loading song URL: $e");
      }
    }
  }


  void updateSongUrl(String url) {
    if (songUrl != url) {
      songUrl = url;
      prepare(isNewSong: true);
      Future.microtask(() => notifyListeners());
    }
  }
  Future<void> play() async {
    if (!isPlaying) {
      await player.play();
      isPlaying = true;
      notifyListeners();
    }
  }

  Future<void> pause() async {
    if (isPlaying) {
      await player.pause();
      isPlaying = false;
      notifyListeners();
    }
  }

  @override
  void dispose() {
    player.dispose();
    super.dispose(); // Gọi dispose của ChangeNotifier
  }
}
