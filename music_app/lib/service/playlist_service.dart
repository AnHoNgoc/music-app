import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../data/model/song.dart';

class PlaylistService {
  final FirebaseFirestore _fireStore;
  final FirebaseAuth _auth;

  PlaylistService({
    FirebaseFirestore? fireStore,
    FirebaseAuth? auth,
  })  : _fireStore = fireStore ?? FirebaseFirestore.instance,
        _auth = auth ?? FirebaseAuth.instance;

  Future<bool> isSongExist(String songId) async {
    final user = _auth.currentUser;
    final snapshot = await _fireStore
        .collection("users")
        .doc(user?.uid)
        .collection("playlist")
        .where("id", isEqualTo: songId)
        .get();
    return snapshot.docs.isNotEmpty;
  }

  Future<void> addSongToPlaylist(Song song) async {
    final user = _auth.currentUser;
    await _fireStore
        .collection("users")
        .doc(user?.uid)
        .collection("playlist")
        .doc(song.id)
        .set({
      "id": song.id,
      "title": song.title,
      "album": song.album,
      "artist": song.artist,
      "source": song.source,
      "image": song.image,
      "duration": song.duration,
    });
  }

  Future<void> deleteSong(String songId) async {
    final userId = _auth.currentUser?.uid;
    if (userId == null) return;
    await _fireStore
        .collection('users')
        .doc(userId)
        .collection('playlist')
        .doc(songId)
        .delete();
  }

  Stream<List<Song>> getUserFavorites() {
    final userId = _auth.currentUser?.uid;
    return _fireStore
        .collection('users')
        .doc(userId)
        .collection("playlist")
        .snapshots()
        .map((snapshot) {
      return snapshot.docs.map((doc) {
        return Song(
          id: doc.id,
          title: doc['title'] ?? '',
          album: doc['album'] ?? '',
          artist: doc['artist'] ?? '',
          source: doc['source'] ?? '',
          image: doc['image'] ?? '',
          duration: doc['duration'] ?? 0,
        );
      }).toList();
    });
  }
}