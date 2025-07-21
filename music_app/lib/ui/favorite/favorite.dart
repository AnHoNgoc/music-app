import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import '../../data/model/song.dart';
import '../../service/playlist_service.dart';
import '../../widgets/confirm_bottom_sheet.dart';
import '../now_playing/now_playing.dart';

class FavoritesTab extends StatefulWidget {
  const FavoritesTab({super.key});

  @override
  State<FavoritesTab> createState() => _FavoritesTabState();
}

class _FavoritesTabState extends State<FavoritesTab> {
  final PlaylistService _playlistService = PlaylistService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Favorite List"),
      ),
      body: StreamBuilder<List<Song>>(
        stream: _playlistService.getUserFavorites(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Center(child: Text('You need login!'));
          } else if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: Text("Loading..."));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No favorites found"));
          }

          final songs = snapshot.data!;

          return ListView.builder(
            itemCount: songs.length,
            itemBuilder: (context, index) {
              return SongItemSection(
                song: songs[index],
                songs: songs,
                scaffoldContext: context,
              );
            },
          );
        },
      ),
    );
  }
}

class SongItemSection extends StatelessWidget {
  final Song song;
  final BuildContext scaffoldContext; // Context từ Scaffold cha
  final List<Song> songs;

  const SongItemSection({
    super.key,
    required this.song,
    required this.scaffoldContext,
    required this.songs,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: EdgeInsets.only(
        left: 24.w,
        right: 8.w,
      ),
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
      title: Text(song.title),
      subtitle: Text(song.artist),
      trailing: IconButton(
        onPressed: () {
          ConfirmBottomSheet.show(
            context: context,
            message: "Are you sure you want to delete this song?",
              onConfirm: () async {
                try {
                  await PlaylistService().deleteSong(song.id);
                  if (!context.mounted) return;
                  await Navigator.of(context).maybePop();
                } catch (e) {
                  if (!context.mounted) return;
                  await Navigator.of(context).maybePop();
                }
              }
          );
        },
        icon: const Icon(Icons.more_horiz),
      ),
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => NowPlaying(
              playingSong: song,
              songs: songs,
            ),
          ),
        );
      },
    );
  }
}




