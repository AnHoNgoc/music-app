import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:music_app/ui/now_playing/audio_player_manager.dart';
import 'package:music_app/ui/favorite/favorite.dart';
import 'package:provider/provider.dart';
import 'account/account.dart';
import 'discovery/discovery.dart';
import 'home/home.dart';
import 'account/user_provider.dart';

class MusicApp extends StatelessWidget {
  const MusicApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Music App",
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MusicHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MusicHomePage extends StatefulWidget {
  const MusicHomePage({super.key});

  @override
  State<MusicHomePage> createState() => _MusicHomePageState();
}

class _MusicHomePageState extends State<MusicHomePage> {
  final List<Widget> _tabs = [
    const HomeTab(),
    const DiscoveryTab(),
    const FavoritesTab(),
    const AccountTab(),
  ];

  int _currentIndex = 0;

  @override
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final userProvider = Provider.of<UserProvider>(context, listen: false);
      userProvider.checkUserLoggedIn();
    });
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text("Music App"),
      ),
      child: Consumer<UserProvider>(
        builder: (context, userProvider, child) {
          return CupertinoTabScaffold(
            tabBar: CupertinoTabBar(
              backgroundColor: Theme.of(context).colorScheme.onInverseSurface,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
                BottomNavigationBarItem(icon: Icon(Icons.album), label: "Discovery"),
                BottomNavigationBarItem(icon: Icon(Icons.favorite), label: "Favorites"),
                BottomNavigationBarItem(icon: Icon(Icons.account_circle), label: "Account"),
              ],
              onTap: (int index) {
                setState(() {
                  _currentIndex = index;
                  if (AudioPlayerManager().isPlaying) {
                    AudioPlayerManager().play();
                  }
                });
              },
            ),
            tabBuilder: (BuildContext context, int index) {
              return _tabs[index];
            },
          );
        },
      ),
    );
  }
}


