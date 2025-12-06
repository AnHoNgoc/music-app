import 'package:flutter/material.dart';
import '../../utils/app_validator.dart';
import '../../utils/input_decoration.dart';
import '../../widgets/notification_dialog.dart';
import 'login.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import '../../service/auth_service.dart';

class SignUpView extends StatefulWidget {
  const SignUpView({super.key});

  @override
  State<SignUpView> createState() => _SignUpViewState();
}

class _SignUpViewState extends State<SignUpView> {

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  final _userNameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  final _authService = AuthService();
  var _isLoader = false;


  @override
  void dispose() {
    _userNameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  Future<void> _submitForm() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoader = true);

    final data = {
      "username": _userNameController.text,
      "email": _emailController.text,
      "password": _passwordController.text,
    };

    String? errorMessage;

    try {
      errorMessage = await _authService.createUser(data);
    } catch (e) {
      errorMessage = "Error: $e";
    } finally {
      if (mounted) setState(() => _isLoader = false);
    }

    if (!mounted) return;

    // ✔️ UI xử lý sau try/catch — rõ ràng, sạch sẽ
    if (errorMessage == null) {
      // Clear fields
      _userNameController.clear();
      _emailController.clear();
      _confirmPasswordController.clear();
      _passwordController.clear();

      showMessage(
        context,
        'User created successfully!',
        color: Colors.green,
      );

      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(builder: (_) => const LoginView()),
            (_) => false,
      );
    } else {
      showMessage(
        context,
        errorMessage,
        color: Colors.red,
      );
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: true,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Form(
          key: _formKey,
          child: ListView(
            padding: EdgeInsets.all(16.w), // Đưa padding vào đây
            children: [
              SizedBox(height: 80.h),
              Center(
                child: SizedBox(
                  width: 250.w,
                  child: Text(
                    "Create New Account",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 28.sp,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
              SizedBox(height: 50.h),
              TextFormField(
                controller: _userNameController,
                style: const TextStyle(color: Colors.black),
                decoration: AppInputDecoration.build("UserName", Icons.person),
                validator: AppValidator.validateUser,
              ),
              SizedBox(height: 16.h),
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
              SizedBox(height: 16.h),
              TextFormField(
                  controller: _confirmPasswordController,
                  style: const TextStyle(color: Colors.black),
                  decoration: AppInputDecoration.build("Confirm Password", Icons.password_outlined),
                  validator: (value) => AppValidator.validateConfirmPassword(
                    value,
                    _passwordController.text,
                  ),
                  obscureText: true
              ),
              SizedBox(height: 40.h),
              SizedBox(
                height: 50.h,
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => _isLoader ? null : _submitForm(),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF4E9F3D),
                    foregroundColor: Colors.white,
                    textStyle: TextStyle(fontSize: 24.sp),
                  ),
                  child: _isLoader
                      ? const Center(child: CircularProgressIndicator())
                      : Text("Create", style: TextStyle(color: Colors.white, fontSize: 25.sp)),
                ),
              ),
              SizedBox(height: 20.h),
              TextButton(
                onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) => const LoginView()));
                },
                child: Text(
                  "Login",
                  style: TextStyle(color: const Color(0xFF4E9F3D), fontSize: 25.sp),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }


}