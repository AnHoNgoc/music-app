import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _fireStore = FirebaseFirestore.instance;

  User? checkUserLoggedIn() {
    return _auth.currentUser;
  }

  String? getUserEmail() {
    return _auth.currentUser?.email;
  }

  Future<String?> createUser(Map<String, dynamic> data) async {
    try {
      await _auth.createUserWithEmailAndPassword(
        email: data["email"],
        password: data["password"],
      );

      final userId = _auth.currentUser!.uid;

      await _fireStore.collection('users').doc(userId).set({
        "username": data["username"],
        "email": data["email"],
      });

      return null; // Thành công
    } on FirebaseAuthException catch (e) {
      if (e.code == 'email-already-in-use') {
        return 'This email is already in use.';
      }
      return 'Registration failed. Please try again.';
    } catch (e) {
      return 'An error occurred. Please try again.';
    }
  }

  Future<bool> loginUser({
    required String email,
    required String password,
  }) async {
    try {
      await _auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      return true;
    } catch (e) {
      return false;
    }
  }


  Future<bool> changePassword({
    required String oldPassword,
    required String newPassword,
  }) async {
    try {
      final user = _auth.currentUser;
      final email = user?.email;

      if (user != null && email != null) {
        final credential = EmailAuthProvider.credential(
          email: email,
          password: oldPassword,
        );
        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(newPassword);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}