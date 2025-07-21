import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:music_app/ui/account/user_provider.dart';
import 'package:music_app/ui/account/change_password.dart';
import 'package:provider/provider.dart';

import '../../widgets/logout_dialog.dart';
import '../login/login.dart';
import '../main_screens.dart';

class AccountTab extends StatelessWidget {
  const AccountTab({super.key});

  Future<void> logOut(BuildContext context) async {
    await FirebaseAuth.instance.signOut();

    if (!context.mounted) return; // 🔑 đảm bảo an toàn

    Navigator.pushAndRemoveUntil(
      context,
      MaterialPageRoute(builder: (context) => const MusicHomePage()),
          (route) => false,
    );
  }

  void changePassword(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const ChangePasswordView()),
    );
  }

  @override
  Widget build(BuildContext context) {
    final userProvider = Provider.of<UserProvider>(context);
    final email = userProvider.getUserEmail() ?? 'No email';
    final User? user = FirebaseAuth.instance.currentUser;

    if (user == null) {
      return const LoginView();
    }

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Account Settings"),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 24.h),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Account Information",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            SizedBox(height: 12.h),
            Card(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12.r)),
              elevation: 2,
              child: ListTile(
                leading: const Icon(Icons.email_outlined),
                title: Text(
                  email,
                  style: TextStyle(
                    fontWeight: FontWeight.w500,
                    fontSize: 14.sp,
                  ),
                ),
                subtitle: const Text('Your email address'),
              ),
            ),
            SizedBox(height: 32.h),
            Text(
              "Settings",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            SizedBox(height: 12.h),
            Card(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12.r)),
              child: Column(
                children: [
                  ListTile(
                    leading: const Icon(Icons.notifications),
                    title: Text(
                      'Notification',
                      style: TextStyle(fontSize: 14.sp),
                    ),
                    onTap: () {},
                  ),
                  Divider(height: 20.h),
                  ListTile(
                    leading: const Icon(Icons.lock_outline),
                    title: Text(
                      'Change Password',
                      style: TextStyle(fontSize: 14.sp),
                    ),
                    onTap: () => changePassword(context),
                  ),
                  Divider(height: 20.h),
                  ListTile(
                    leading: const Icon(Icons.logout),
                    title: Text(
                      'Logout',
                      style: TextStyle(fontSize: 14.sp),
                    ),
                    onTap: () async {
                      final confirm = await LogoutDialog.showLogoutConfirmationDialog(context);

                      if (!context.mounted) return;

                      if (confirm) {
                        await logOut(context);
                      }
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}