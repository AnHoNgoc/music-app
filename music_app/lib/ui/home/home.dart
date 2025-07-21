import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../data/model/song.dart';
import 'viewmodel.dart';
import '../now_playing/now_playing.dart';

class HomeTab extends StatelessWidget {
  const HomeTab({super.key});

  @override
  Widget build(BuildContext context) {
    return const HomeTabPage();
  }
}

class HomeTabPage extends StatefulWidget {
  const HomeTabPage({super.key});

  @override
  State<HomeTabPage> createState() => _HomeTabPageState();
}

class _HomeTabPageState extends State<HomeTabPage> {
  List<Song> songs = [];
  late MusicAppViewModel _viewModel;

  @override
  void initState() {
    super.initState();
    _viewModel = MusicAppViewModel();
    _viewModel.loadSong();
    observeData();
  }

  @override
  void dispose() {
    _viewModel.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: getBody(),
    );
  }

  Widget getBody() {
    bool showLoading = songs.isEmpty;
    return showLoading ? getProgressBar() : getListView();
  }

  Widget getProgressBar() {
    return const Center(child: CircularProgressIndicator());
  }

  ListView getListView() {
    return ListView.separated(
      itemBuilder: (context, position) => getRow(position),
      separatorBuilder: (context, index) => Divider(
        color: Colors.grey,
        thickness: 1.h,
        indent: 24.w,
        endIndent: 24.w,
      ),
      itemCount: songs.length,
      shrinkWrap: true,
    );
  }

  Widget getRow(int index) {
    final song = songs[index];
    return _SongItemSection(
      song: song,
      onTap: () => navigate(song),
      onMore: showBottomSheet,
    );
  }

  void observeData() {
    _viewModel.songStream.listen((songList) {
      setState(() {
        songs.addAll(songList);
      });
    });
  }

  void showBottomSheet() {
    showModalBottomSheet(
      context: context,
      builder: (context) {
        return ClipRRect(
          borderRadius: BorderRadius.vertical(top: Radius.circular(16.r)),
          child: Container(
            height: 400.h,
            color: Colors.grey,
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  Text(
                    "Model Bottom Sheet",
                    style: TextStyle(fontSize: 16.sp),
                  ),
                  SizedBox(height: 12.h),
                  ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    child: Text("Close Bottom Sheet", style: TextStyle(fontSize: 14.sp)),
                  )
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  void navigate(Song song) {
    Navigator.push(context, CupertinoPageRoute(builder: (context) {
      return NowPlaying(
        songs: songs,
        playingSong: song,
      );
    }));
  }
}

class _SongItemSection extends StatelessWidget {
  const _SongItemSection({
    required this.song,
    required this.onTap,
    required this.onMore,
  });

  final Song song;
  final VoidCallback onTap;
  final VoidCallback onMore;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: EdgeInsets.only(left: 24.w, right: 8.w),
      leading: ClipRRect(
        borderRadius: BorderRadius.circular(14.r),
        child: FadeInImage.assetNetwork(
          placeholder: "assets/img_err.png",
          image: song.image,
          width: 48.w,
          height: 48.w,
          imageErrorBuilder: (context, error, stackTrace) {
            return Image.asset(
              "assets/img_err.png",
              width: 48.w,
              height: 48.w,
            );
          },
        ),
      ),
      title: Text(
        song.title,
        style: TextStyle(fontSize: 16.sp),
      ),
      subtitle: Text(
        song.artist,
        style: TextStyle(fontSize: 14.sp),
      ),
      trailing: IconButton(
        onPressed: onMore,
        icon: Icon(Icons.more_horiz, size: 20.sp),
      ),
      onTap: onTap,
    );
  }
}



