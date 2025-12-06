import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../../service/auth_service.dart';

class UserProvider with ChangeNotifier {

  String? _userId;
  User? _currentUser;
  final AuthService _authService = AuthService();
  List<Map<String, dynamic>> _playlists = [];

  User? get currentUser => _currentUser;
  String? get userId => _userId;
  List<Map<String, dynamic>> get playlists => _playlists;

  Future<void> checkUserLoggedIn() async {
    _currentUser = _authService.checkUserLoggedIn();
    _userId = _currentUser?.uid;
    notifyListeners();
  }

  String? getUserEmail() {
    return _currentUser?.email;
  }

  void updatePlaylists(List<Map<String, dynamic>> newPlaylists) {
    _playlists = newPlaylists;
    notifyListeners();
  }
}