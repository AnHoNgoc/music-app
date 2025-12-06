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

  Future<String?> loginUser(Map<String, dynamic> data) async {
    try {
      await _auth.signInWithEmailAndPassword(
        email: data["email"],
        password: data["password"],
      );
      return null;
    } on FirebaseAuthException catch (_) {
      return 'Invalid email or password.';
    } catch (_) {
      return 'An error occurred. Please try again.';
    }
  }


  Future<String?> changePassword({
    required String oldPassword,
    required String newPassword,
  }) async {
    try {
      final user = FirebaseAuth.instance.currentUser;
      if (user == null) return "User not found.";
      final email = user.email;
      if (email == null) return "Email not available for this account.";

      // Re-auth với mật khẩu cũ
      final cred = EmailAuthProvider.credential(
        email: email,
        password: oldPassword,
      );
      await user.reauthenticateWithCredential(cred);

      // Đổi mật khẩu
      await user.updatePassword(newPassword);
      return null;
    } on FirebaseAuthException catch (e) {
      switch (e.code) {
        case 'wrong-password':
        case 'invalid-credential':
          return "Old password is incorrect.";
        case 'weak-password':
          return "New password is too weak.";
        case 'requires-recent-login':
          return "Please log in again and try changing the password.";
        case 'user-not-found':
        case 'user-mismatch':
          return "User not found or mismatched.";
        case 'too-many-requests':
          return "Too many attempts. Please try again later.";
        default:
          return "Password change failed. Please try again.";
      }
    } catch (e) {
      // debugPrint('changePassword unknown error: $e');
      return "An error occurred. Please try again.";
    }
  }

  Future<bool> deleteUser({String? password}) async {
    User? user = _auth.currentUser;
    if (user == null) return false;

    try {
      await _fireStore.collection('users').doc(user.uid).delete();
      await user.delete();
      return true;
    } on FirebaseAuthException catch (e) {
      if (e.code == 'requires-recent-login') {
        if (password == null || user.email == null) return false;

        AuthCredential credential =
        EmailAuthProvider.credential(email: user.email!, password: password);
        await user.reauthenticateWithCredential(credential);

        await _fireStore.collection('users').doc(user.uid).delete();
        await user.delete();
        return true;
      }
      return false;
    }
  }
}