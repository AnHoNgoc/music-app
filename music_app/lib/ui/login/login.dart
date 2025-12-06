import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'package:music_app/ui/login/sign_up.dart';
import '../../utils/app_validator.dart';
import '../../utils/input_decoration.dart';
import '../../widgets/notification_dialog.dart';
import '../../service/auth_service.dart';
import '../main_screens.dart';


class LoginView extends StatefulWidget {
  const LoginView({super.key});

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  var _isLoader = false;
  final _authService = AuthService();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _submitForm() async {
    if (!_formKey.currentState!.validate()) return;

    if (mounted) {
      setState(() {
        _isLoader = true;
      });
    }

    String? errorMessage;

    try {
      errorMessage = await _authService.loginUser({
        "email": _emailController.text.trim(),
        "password": _passwordController.text.trim(),
      });
    } catch (e) {
      errorMessage = "Error: $e";
    } finally {
      if (mounted) {
        setState(() => _isLoader = false);
      }
    }

    // 🚀 Xử lý UI sau try/catch
    if (!mounted) return;

    if (errorMessage == null) {
      await Future.delayed(const Duration(milliseconds: 500));
      if (!mounted) return;

      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const MusicHomePage()),
      );
    } else {
      showMessage(context, errorMessage, color: Colors.red);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: EdgeInsets.all(16.w),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              SizedBox(height: 40.h),
              Image.asset(
                'assets/login.png',
                width: 250.w,
                height: 250.w,
                fit: BoxFit.contain,
              ),
              SizedBox(height: 40.h),
              TextFormField(
                controller: _emailController,
                style: const TextStyle(color: Colors.black),
                keyboardType: TextInputType.emailAddress,
                decoration: AppInputDecoration.build("Email", Icons.email),
                validator: AppValidator.validateEmail,
              ),
              SizedBox(height: 16.h),
              TextFormField(
                controller: _passwordController,
                style: const TextStyle(color: Colors.black),
                decoration: AppInputDecoration.build("Password", Icons.password),
                validator: AppValidator.validatePassword,
                obscureText: true,
              ),
              SizedBox(height: 40.h),
              SizedBox(
                height: 50.h,
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _isLoader ? null : _submitForm,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF4E9F3D),
                    foregroundColor: Colors.white,
                    textStyle: TextStyle(fontSize: 18.sp),
                  ),
                  child: _isLoader
                      ? const Center(child: CircularProgressIndicator(color: Colors.white))
                      : Text(
                    "Login",
                    style: TextStyle(color: Colors.white, fontSize: 25.sp),
                  ),
                ),
              ),
              SizedBox(height: 20.h),
              TextButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const SignUpView()),
                  );
                },
                child: Text(
                  "Create New Account",
                  style: TextStyle(color: const Color(0xFF4E9F3D), fontSize: 22.sp),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

}
