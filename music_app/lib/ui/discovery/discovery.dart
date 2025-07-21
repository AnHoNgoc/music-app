import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class DiscoveryTab extends StatelessWidget {
  const DiscoveryTab({super.key});

  final List<Map<String, String>> trendingSongs = const [
    {
      "title": "Đừng làm trái tim anh đau",
      "imageUrl": "https://static.wixstatic.com/media/c717fa_9622620ff5f94117ae8798becb7600a1~mv2.jpg/v1/fill/w_568,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c717fa_9622620ff5f94117ae8798becb7600a1~mv2.jpg",
    },
    {
      "title": "Có Chàng Trai Viết Lên Cây",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYk4cM3E5Nk83eBnUjyVEOfkvRVqRStjsZw&s",
    },
    {
      "title": "Em Gì Ơi",
      "imageUrl": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/3/5/3/f/353f305006cc99e50ef00877e4135d0e.jpg",
    },
    {
      "title": "Thích Em Hơi Nhiều",
      "imageUrl": "https://media.viez.vn/prod/2021/6/19/small_1624074384242_fadb278fcc.jpeg",
    },
    {
      "title": "Nàng Thơ",
      "imageUrl": "https://avatar-ex-swe.nixcdn.com/song/share/2020/07/31/d/5/a/a/1596188260287.jpg",
    },
  ];

  final List<Map<String, String>> recommendedPlaylists = const [
    {
      "title": "Nhạc Chill Việt",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0c4JSaPSnJxCH04cMgMnF99mig2AILa2iQ&s",
    },
    {
      "title": "Acoustic Việt",
      "imageUrl": "https://i.ytimg.com/vi/LURzRjIpnUo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCT0M4nyc9PVTubOiLQhZst8DNibA",
    },
    {
      "title": "Top Hits Vpop",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFL0cM5RaNP4fKlGdOAbY4l4ZfmNntu0-RA&s",
    },
    {
      "title": "Ballad Buồn",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2_zIK8j566eKbPHLvpmwH-XzUKFet2vaDQ&s",
    },
    {
      "title": "Lofi Việt Chill",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCFn2K9tPguXDw-zVKxISeMxwutoUrI8dIg&s",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Discover Music'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Search Bar
            TextField(
              decoration: InputDecoration(
                hintText: 'Search songs, artists, albums...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12.r),
                ),
              ),
            ),
            SizedBox(height: 24.h),

            // Genres / Moods
            Text(
              "Genres & Moods",
              style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 12.h),
            Wrap(
              spacing: 8.w,
              children: [
                Chip(label: Text("Chill", style: TextStyle(fontSize: 14.sp))),
                Chip(label: Text("Workout", style: TextStyle(fontSize: 14.sp))),
                Chip(label: Text("Lofi", style: TextStyle(fontSize: 14.sp))),
                Chip(label: Text("Pop", style: TextStyle(fontSize: 14.sp))),
                Chip(label: Text("Rock", style: TextStyle(fontSize: 14.sp))),
                Chip(label: Text("Jazz", style: TextStyle(fontSize: 14.sp))),
              ],
            ),
            SizedBox(height: 24.h),

            // Trending Now
            Text(
              "Trending Now",
              style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 12.h),
            SizedBox(
              height: 150.h,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: trendingSongs.length,
                separatorBuilder: (_, __) => SizedBox(width: 12.w),
                itemBuilder: (context, index) {
                  final song = trendingSongs[index];
                  return Container(
                    width: 120.w,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12.r),
                      image: DecorationImage(
                        image: NetworkImage(song["imageUrl"]!),
                        fit: BoxFit.cover,
                      ),
                    ),
                    alignment: Alignment.bottomCenter,
                    child: Container(
                      width: double.infinity,
                      color: Colors.black54,
                      padding: EdgeInsets.all(4.w),
                      child: Text(
                        song["title"]!,
                        style: TextStyle(fontSize: 12.sp, color: Colors.white),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  );
                },
              ),
            ),
            SizedBox(height: 24.h),

            // Recommended Playlists
            Text(
              "Recommended Playlists",
              style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 12.h),
            SizedBox(
              height: 150.h,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: recommendedPlaylists.length,
                separatorBuilder: (_, __) => SizedBox(width: 12.w),
                itemBuilder: (context, index) {
                  final playlist = recommendedPlaylists[index];
                  return Container(
                    width: 120.w,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12.r),
                      image: DecorationImage(
                        image: NetworkImage(playlist["imageUrl"]!),
                        fit: BoxFit.cover,
                      ),
                    ),
                    alignment: Alignment.bottomCenter,
                    child: Container(
                      width: double.infinity,
                      color: Colors.black54,
                      padding: EdgeInsets.all(4.w),
                      child: Text(
                        playlist["title"]!,
                        style: TextStyle(fontSize: 12.sp, color: Colors.white),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}


