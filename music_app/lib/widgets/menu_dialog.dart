import 'package:flutter/cupertino.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../ui/login/login.dart';

class MenuDialog {
  static void showSettingsMenu(BuildContext context, User? currentUser, Future<void> Function(BuildContext) logOut) {
    showCupertinoModalPopup(
      context: context,
      builder: (BuildContext context) => CupertinoActionSheet(
        title: const Text("Settings Menu"),
        actions: [
          currentUser == null
              ? CupertinoActionSheetAction(
            onPressed: () {
              Navigator.pop(context);
              Navigator.push(
                context,
                CupertinoPageRoute(
                  builder: (context) => const LoginView(),
                ),
              );
            },
            child: const Text("Login"),
          )
              : CupertinoActionSheetAction(
            onPressed: () {
              Navigator.pop(context);
              logOut(context);
            },
            child: const Text("Logout"),
          ),
          if (currentUser != null)
            CupertinoActionSheetAction(
              onPressed: () {
                Navigator.pop(context);
                // TODO: Thêm đổi mật khẩu nếu cần
              },
              child: const Text("Change Password"),
            ),
        ],
        cancelButton: CupertinoActionSheetAction(
          onPressed: () {
            Navigator.pop(context);
          },
          child: const Text("Cancel"),
        ),
      ),
    );
  }
}