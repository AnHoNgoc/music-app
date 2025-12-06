import 'package:flutter/material.dart';

void showMessage(BuildContext context, String message, {Color color = Colors.black}) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(message),
      backgroundColor: color,
    ),
  );
}