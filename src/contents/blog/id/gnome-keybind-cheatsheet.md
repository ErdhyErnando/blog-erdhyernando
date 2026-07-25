---
title: "Contekan Keybind Gnome"
subtitle: "kamu bisa mengabaikan contekan ini"
date: 2026-07-25
thumbnail: "/images/blog/gnome-cheatsheet.webp"
draft: false
---

## Halo, Linux

awal juli tahun ini pertarungan seumur hidupku dan hubungan cinta-benci terhadap adobe akhirnya berakhir. Bukan karena menyerah atau gencatan senjata, tapi karena serangan mendadak dari SSD windows yang korup yang mengacaukan jalannya pertempuran.

maaf kalau perkenalan pertama itu tidak masuk akal, aku kebanyakan nonton House of Dragons dan marathon Dune Part I dan II di pesawat serta The Odyssey beberapa hari lalu (sayangnya bukan di IMAX, tidak seperti yang Christopher Nolan inginkan).

jadi intinya ssd windowsku korup entah kenapa (aku curiga mungkin karena [masalah codex ini](https://github.com/openai/codex/issues/28224)) dan awalnya aku coba factory reset untuk lihat apakah mungkin ada firmware yang korup, tapi aku terus dapat layar hitam berulang kali meskipun Crystal Disk bilang masih bagus.

karena aku butuh laptop yang berfungsi, aku putuskan untuk beli SSD 256GB dan install linux di atasnya, karena jujur saja aku juga sudah muak dengan windows!

## Fedora???

blog ini seharusnya menjadi semacam contekan online pribadi untuk beberapa keybind yang diatur di fedora 44 workstation GNOME. Sekarang sub-bab ini memicu perang distro, tidak ada alasan khusus kenapa aku memilih fedora workstation, mungkin karena sebelumnya aku pakai WSL dengan ubuntu dan aku ingin coba sesuatu yang berbeda! (video distro hopping segera? 👀)

jadi terima kasih kalau kamu membaca sejauh ini, tapi yang tersisa hanyalah beberapa keybinding untuk memudahkanku berpindah-pindah dan memanfaatkan berbagai virtual desktop/ lingkungan kerja

sejauh ini bagus, satu-satunya pengujian yang belum aku lakukan saat menulis blog ini adalah editing video, nanti akan kubuat video youtube panjang!

## Navigasi Workspace

| Aksi                          | Keybinding                                                         |
| ----------------------------- | ------------------------------------------------------------------ |
| Pindah ke workspace 1         | `Super+Home`                                                       |
| Pindah ke workspace terakhir  | `Super+End`                                                        |
| Pindah workspace ke kiri      | `Super+Page_Up` · `Super+Alt+Left` · `Ctrl+Alt+Left`              |
| Pindah workspace ke kanan     | `Super+Page_Down` · `Super+Alt+Right` · `Ctrl+Alt+Right`          |
| Pindah workspace ke atas      | `Ctrl+Alt+Up`                                                      |
| Pindah workspace ke bawah     | `Ctrl+Alt+Down`                                                    |

## Pindahkan Jendela ke Workspace

| Aksi                                   | Keybinding                                                                   |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| Pindahkan jendela ke workspace 1       | `Super+Shift+Home`                                                           |
| Pindahkan jendela ke workspace terakhir | `Super+Shift+End`                                                            |
| Pindahkan jendela ke workspace kiri    | `Super+Shift+Page_Up` · `Super+Shift+Alt+Left` · `Ctrl+Shift+Alt+Left`      |
| Pindahkan jendela ke workspace kanan   | `Super+Shift+Page_Down` · `Super+Shift+Alt+Right` · `Ctrl+Shift+Alt+Right`  |
| Pindahkan jendela ke workspace atas    | `Ctrl+Shift+Alt+Up`                                                          |
| Pindahkan jendela ke workspace bawah   | `Ctrl+Shift+Alt+Down`                                                        |

## Manajemen Jendela

| Aksi                  | Keybinding                    |
| --------------------- | ----------------------------- |
| Maksimalkan           | `Super+Up`                    |
| Kembalikan ukuran     | `Super+Down` · `Alt+F5`      |
| Toggle maksimalkan    | `Alt+F10`                     |
| Tile kiri (setengah)  | `Super+Left`                  |
| Tile kanan (setengah) | `Super+Right`                 |
| Minimalkan            | `Super+H`                     |
| Tutup jendela         | `Alt+F4`                      |
| Mulai pindah (seret)  | `Alt+F7`                      |
| Mulai ubah ukuran     | `Alt+F8`                      |
| Menu jendela          | `Alt+Space`                   |

## Pindahkan Jendela ke Monitor

| Aksi                   | Keybinding          |
| ---------------------- | ------------------- |
| Pindah ke monitor kiri  | `Super+Shift+Left`  |
| Pindah ke monitor kanan | `Super+Shift+Right` |
| Pindah ke monitor atas  | `Super+Shift+Up`    |
| Pindah ke monitor bawah | `Super+Shift+Down`  |

## Pindah Aplikasi

| Aksi                                   | Keybinding                              |
| -------------------------------------- | --------------------------------------- |
| Pindah aplikasi                        | `Super+Tab` · `Alt+Tab`                |
| Pindah aplikasi mundur                 | `Super+Shift+Tab` · `Alt+Shift+Tab`   |
| Pindah jendela dalam grup              | `Super+` `` ` `` · `Alt+` `` ` ``      |
| Pindah jendela dalam grup (mundur)     | `Super+Shift+` `` ` `` · `Alt+Shift+` `` ` `` |
| Siklus semua jendela                   | `Alt+Escape`                            |
| Siklus semua jendela mundur            | `Shift+Alt+Escape`                      |
| Siklus jendela dalam grup              | `Alt+F6`                                |
| Siklus jendela dalam grup (mundur)     | `Shift+Alt+F6`                          |

## Dash / Peluncur Aplikasi

| Aksi                              | Keybinding                           |
| --------------------------------- | ------------------------------------ |
| Buka peluncur aplikasi            | `Super`                              |
| Tampilkan semua aplikasi          | `Super+A`                            |
| Pindah ke aplikasi 1–9            | `Super+1` sampai `Super+9`          |
| Buka jendela baru untuk app 1–9   | `Super+Ctrl+1` sampai `Super+Ctrl+9` |

## Sistem

| Aksi                    | Keybinding                |
| ----------------------- | ------------------------- |
| Kunci layar             | `Super+L`                 |
| Keluar                  | `Ctrl+Alt+Delete`         |
| Dialog jalankan perintah| `Alt+F2`                  |
| Pengaturan cepat        | `Super+S`                 |
| Baki notifikasi         | `Super+V` · `Super+M`    |
| Fokus notifikasi        | `Super+N`                 |
| Pindah input monitor    | `Super+P`                 |
| UI screenshot           | `Print`                   |
| Screenshot jendela      | `Alt+Print`               |
| Screenshot (penuh)      | `Shift+Print`             |
| Rekaman layar           | `Ctrl+Shift+Alt+R`        |
| Toggle pembesar         | `Alt+Super+8`             |
| Pembesar zoom in        | `Alt+Super+=`             |
| Pembesar zoom out       | `Alt+Super+-`             |
| Pembaca layar           | `Alt+Super+S`             |
