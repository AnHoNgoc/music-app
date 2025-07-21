
import 'package:flutter/material.dart';
import 'package:music_app/data/model/song.dart';
import 'package:music_app/widgets/notification_dialog.dart';
import '../../service/playlist_service.dart';

class AddMusic extends StatefulWidget {

  final Song currentSong;

  const AddMusic({super.key, required this.currentSong});

  @override
  State<AddMusic> createState() => _AddMusicState();
}

class _AddMusicState extends State<AddMusic> {

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  var isLoader = false;

  Future<void> _submitForm() async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        isLoader = true;
      });

      try {
        final service = PlaylistService();
        final exists = await service.isSongExist(widget.currentSong.id);

        if (!mounted) return;

        if (exists) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Song already exists in the playlist!')),
          );
        } else {
          await service.addSongToPlaylist(widget.currentSong);
          if (!mounted) return;
          NotificationDialog.showMessage(context, 'Song added to playlist successfully!', color: Colors.green);
          await Future.delayed(const Duration(milliseconds: 500));
          if (!mounted) return;
          Navigator.pop(context);
        }
      } catch (e) {
        if (!mounted) return;
        NotificationDialog.showMessage(context, 'Something went wrong: $e', color: Colors.red);
      } finally {
        if (mounted) {
          setState(() {
            isLoader = false;
          });
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextFormField(
                autovalidateMode: AutovalidateMode.onUserInteraction,
                initialValue: widget.currentSong.title,
                readOnly: true, // Không cho phép nhập
                decoration: const InputDecoration(labelText: "Title"),
              ),
              TextFormField(
                autovalidateMode: AutovalidateMode.onUserInteraction,
                initialValue: widget.currentSong.album,
                readOnly: true, // Không cho phép nhập
                decoration: const InputDecoration(labelText: "Album"),
              ),
              const SizedBox(
                height: 16,
              ),
              ElevatedButton(
                  onPressed: () {
                    if (isLoader == false) {
                      _submitForm();
                    }
                  },
                  child: isLoader
                      ? const Center(child: CircularProgressIndicator())
                      : const Text("Add song to playlist"))
            ],
          )),
    );
  }
}
