import 'package:flutter/cupertino.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:music_app/ui/main_screens.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  double _scale = 0.5;
  final Duration _animationDuration = const Duration(seconds: 2);

  @override
  void initState() {
    super.initState();

    // Bắt đầu animation sau 100ms
    Future.delayed(const Duration(milliseconds: 100), () {
      setState(() {
        _scale = 1.0; // phóng to ảnh
      });
    });

    // Chuyển sang màn hình chính sau 3 giây
    Future.delayed(const Duration(seconds: 3), () {
      if (!mounted) return;
      Navigator.pushReplacement(
        context,
        CupertinoPageRoute(builder: (_) => const MusicApp()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      backgroundColor: const Color(0xFF3A3B4F),
      child: Center(
        child: AnimatedScale(
          scale: _scale,
          duration: _animationDuration,
          curve: Curves.easeInOut,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(20), // bo tròn góc
            child: Image.asset(
              'assets/splash_music.png',
              width: 200.w,
              height: 200.h,
              fit: BoxFit.cover,
            ),
          ),
        ),
      ),
    );
  }
}