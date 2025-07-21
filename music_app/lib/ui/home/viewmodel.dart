import 'dart:async';
import 'package:music_app/data/repository/repository.dart';
import '../../data/model/song.dart';

class MusicAppViewModel {
  final StreamController<List<Song>> _songStreamController = StreamController();

  Stream<List<Song>> get songStream => _songStreamController.stream;

  Future<void> loadSong() async {
    final repository = DefaultRepository();
    try {
      List<Song>? songs = await repository.loadData();
      _songStreamController.add(songs!);
    } catch (error) {
      _songStreamController.addError(error);
    }
  }

  void dispose() {
    _songStreamController.close();
  }
}
