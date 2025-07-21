import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:music_app/ui/main_screens.dart';

import '../../service/auth_service.dart';
import '../../utils/app_validator.dart';
import '../../utils/input_decoration.dart';

class ChangePasswordView extends StatefulWidget {
  const ChangePasswordView({super.key});

  @override
  State<ChangePasswordView> createState() => _ChangePasswordViewState();
}

class _ChangePasswordViewState extends State<ChangePasswordView> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _oldPasswordController = TextEditingController();
  final TextEditingController _newPasswordController = TextEditingController();
  final TextEditingController _confirmPasswordController = TextEditingController();

  bool _isLoading = false;

  bool _isOldPasswordObscure = true;
  bool _isNewPasswordObscure = true;
  bool _isConfirmPasswordObscure = true;

  @override
  void dispose() {
    _oldPasswordController.dispose();
    _newPasswordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  Future<void> _submitForm() async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isLoading = true;
      });

      final result = await AuthService().changePassword(
        oldPassword: _oldPasswordController.text.trim(),
        newPassword: _newPasswordController.text.trim(),
      );

      if (!mounted) return;

      setState(() {
        _isLoading = false;
      });

      if (result) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text("Password changed successfully!"),
          backgroundColor: Colors.green,
        ));

        Navigator.pushAndRemoveUntil(
          context,
          MaterialPageRoute(builder: (context) => const MusicHomePage()),
              (route) => false,
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue.shade900,
        title: const Text('Change Password', style: TextStyle(color: Colors.white)),
        iconTheme: const IconThemeData(color: Colors.white),
        centerTitle: true, // 👈 Thêm dòng này
      ),
      body: Padding(
        padding: EdgeInsets.all(16.w),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              SizedBox(height: 40.h),

              Image.asset(
                'assets/img.png',
                width: 150.w,
                height: 170.h,
                fit: BoxFit.contain,
              ),

              SizedBox(height: 60.h),

              TextFormField(
                controller: _oldPasswordController,
                obscureText: _isOldPasswordObscure,
                decoration: AppInputDecoration.build(
                  'Old Password',
                  _isOldPasswordObscure ? Icons.visibility_off : Icons.visibility,
                ).copyWith(
                  suffixIcon: IconButton(
                    icon: Icon(
                      _isOldPasswordObscure ? Icons.visibility_off : Icons.visibility,
                      color: Colors.grey,
                    ),
                    onPressed: () {
                      setState(() {
                        _isOldPasswordObscure = !_isOldPasswordObscure;
                      });
                    },
                  ),
                ),
                validator: AppValidator.validatePassword,
              ),

              SizedBox(height: 20.h),

              TextFormField(
                controller: _newPasswordController,
                obscureText: _isNewPasswordObscure,
                decoration: AppInputDecoration.build(
                  'New Password',
                  Icons.lock_outline, // icon mặc định
                ).copyWith(
                  suffixIcon: IconButton(
                    icon: Icon(
                      _isNewPasswordObscure ? Icons.visibility_off : Icons.visibility,
                      color: Colors.grey,
                    ),
                    onPressed: () {
                      setState(() {
                        _isNewPasswordObscure = !_isNewPasswordObscure;
                      });
                    },
                  ),
                ),
                validator: (value) => AppValidator.validateNewPassword(
                  value,
                  _oldPasswordController.text,
                ),
              ),
              SizedBox(height: 20.h),

              TextFormField(
                controller: _confirmPasswordController,
                obscureText: _isConfirmPasswordObscure,
                decoration: AppInputDecoration.build(
                  'Confirm New Password',
                  Icons.lock_outline,
                ).copyWith(
                  suffixIcon: IconButton(
                    icon: Icon(
                      _isConfirmPasswordObscure ? Icons.visibility_off : Icons.visibility,
                      color: Colors.grey,
                    ),
                    onPressed: () {
                      setState(() {
                        _isConfirmPasswordObscure = !_isConfirmPasswordObscure;
                      });
                    },
                  ),
                ),
                validator: (value) => AppValidator.validateConfirmPassword(
                  value,
                  _newPasswordController.text,
                ),
              ),

              SizedBox(height: 40.h),

              SizedBox(
                width: double.infinity,
                height: 50.h,
                child: ElevatedButton(
                  onPressed: _isLoading ? null : _submitForm,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blue.shade900,
                    foregroundColor: Colors.white,
                    textStyle: TextStyle(fontSize: 18.sp),
                  ),
                  child: _isLoading
                      ? const CircularProgressIndicator(color: Colors.white)
                      : Text("Change Password", style: TextStyle(fontSize: 20.sp)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
