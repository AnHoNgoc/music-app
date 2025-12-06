import 'package:flutter/cupertino.dart';

Future<bool> showLogoutConfirmationDialog(BuildContext context) async {
  return await showCupertinoDialog<bool>(
    context: context,
    builder: (context) => CupertinoAlertDialog(
      title: const Text('Confirmation'),
      content: const Text('Are you sure you want to log out?'),
      actions: [
        CupertinoDialogAction(
          isDefaultAction: true,
          onPressed: () => Navigator.pop(context, false),
          child: const Text('Cancel'),
        ),
        CupertinoDialogAction(
          isDestructiveAction: true,
          onPressed: () => Navigator.pop(context, true),
          child: const Text('Log Out'),
        ),
      ],
    ),
  ) ?? false;
}