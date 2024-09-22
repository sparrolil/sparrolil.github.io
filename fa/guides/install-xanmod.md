---
title: نصب هسته XanMod و فعال‌سازی BBRv3
description: راهنمای کامل نصب هسته XanMod و فعال‌سازی پروتکل BBRv3 برای بهبود عملکرد شبکه.
---

# نصب هسته XanMod و فعال‌سازی BBRv3

در این راهنما به نحوه نصب هسته XanMod و فعال‌سازی BBRv3 جهت بهبود عملکرد شبکه می‌پردازیم.

::: warning هشدار!
شما در حال تغییر هسته سرور خود هستید، که ممکن است برخی دیتاسنترها این اجازه را به شما ندهند.
:::

::: tip منابع مفید
برای اطلاعات بیشتر می‌توانید به وبسایت یا گروه تلگرام هسته XanMod مراجعه کنید:

- [گروه تلگرام](https://t.me/kernel_xanmod)
- [وبسایت رسمی XanMod](https://xanmod.org)
:::

## مراحل نصب

1. به‌روزرسانی لیست پکیج‌ها:

```bash
sudo apt update
```

2. نصب پکیج gnupg:

```bash
sudo apt install gnupg
```

3. افزودن کلید GPG:

```bash
wget -qO - https://gitlab.com/afrd.gpg | sudo gpg --dearmor -o /usr/share/keyrings/xanmod-archive-keyring.gpg
```

4. افزودن مخزن XanMod به منابع APT:

```bash
echo 'deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-release.list
```

5. به‌روزرسانی مجدد لیست پکیج‌ها:

```bash
sudo apt update
```

6. یافتن نسخه مناسب هسته XanMod:

```bash
/usr/bin/awk -f <(wget -qO - https://dl.xanmod.org/check_x86-64_psabi.sh)
```

براساس خروجی دستور بالا و شاخه انتخابی، نسخه مناسب هسته را از جدول زیر انتخاب کنید:

| شاخه  | v1                    | v2                    | v3                    | v4                    |
|-------|-----------------------|-----------------------|-----------------------|-----------------------|
| MAIN  | linux-xanmod-x64v1     | linux-xanmod-x64v2     | linux-xanmod-x64v3     | linux-xanmod-x64v4     |
| EDGE  | -                      | linux-xanmod-edge-x64v2| linux-xanmod-edge-x64v3| linux-xanmod-edge-x64v4|
| LTS   | linux-xanmod-lts-x64v1 | linux-xanmod-lts-x64v2 | linux-xanmod-lts-x64v3 | linux-xanmod-lts-x64v4 |
| RT    | -                      | linux-xanmod-rt-x64v2  | linux-xanmod-rt-x64v3  | linux-xanmod-rt-x64v4  |

::: tip نمونه 
به عنوان مثال، ما از شاخه «MAIN» و نسخه «v3» استفاده می‌کنیم.
:::

7. نصب نسخه موردنظر:

```bash
sudo apt install linux-xanmod-x64v3
```

8. ریبوت کردن سیستم:

```bash
sudo reboot
```

پس از ریبوت، با دستور زیر بررسی کنید که آیا هسته XanMod نصب شده است یا خیر:

```bash
uname -a
```

برای اطمینان از نصب BBRv3، دستورات زیر را اجرا کنید:

- لود کردن ماژول‌ها:

```bash
depmod -a
```

- نمایش اطلاعات BBR:

```bash
modinfo tcp_bbr
```

## فعال‌سازی BBRv3

برای فعال‌سازی BBRv3 مراحل زیر را دنبال کنید:

1. فایل `sysctl.conf` را ویرایش کنید:

```bash
sudo nano /etc/sysctl.conf
```

2. مقادیر زیر را اضافه یا تغییر دهید و سپس فایل را ذخیره کنید:

```dotenv
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
```

3. تغییرات را اعمال کنید:

```bash
sudo sysctl -p
```

4. برای اطمینان از اعمال شدن تغییرات، دستور زیر را اجرا کنید:

```bash
sysctl net.ipv4.tcp_congestion_control
 ```

::: tip خروجی دستور
این دستور باید مقدار `bbr` را برگرداند.
:::

::: tip به‌روزرسانی پکیج‌ها
می‌توانید از دستور زیر برای به‌روزرسانی پکیج‌ها استفاده کنید:
```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove --purge -y && sudo apt clean -y && sudo apt autoclean -y
```
:::