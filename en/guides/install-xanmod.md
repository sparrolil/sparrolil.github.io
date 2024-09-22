---
title: Installing XanMod Kernel and Enabling BBRv3
description: A complete guide on installing the XanMod kernel and enabling the BBRv3 protocol to improve network performance.
---

# Installing XanMod Kernel and Enabling BBRv3

In this guide, we will walk through the process of installing the XanMod kernel and enabling BBRv3 to enhance network performance.

::: warning
You are about to change your server's kernel, which may not be allowed by some data centers.
:::

::: tip info
For more information, you can visit the XanMod kernel website or Telegram group:

- [Telegram Group](https://t.me/kernel_xanmod)
- [Official XanMod Website](https://xanmod.org)
:::

## Installation Steps

1. Update the package list:

```bash
sudo apt update
```

2. Install the `gnupg` package:

```bash
sudo apt install gnupg
```

3. Add the GPG key:

```bash
wget -qO - https://gitlab.com/afrd.gpg | sudo gpg --dearmor -o /usr/share/keyrings/xanmod-archive-keyring.gpg
```

4. Add the XanMod repository to APT sources:

```bash
echo 'deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-release.list
```

5. Update the package list again:

```bash
sudo apt update
```

6. Find the appropriate XanMod kernel version:

```bash
/usr/bin/awk -f <(wget -qO - https://dl.xanmod.org/check_x86-64_psabi.sh)
```

Based on the output of the above command and the selected branch, choose the appropriate kernel version from the table below:

| Branch | v1                    | v2                    | v3                    | v4                    |
|--------|-----------------------|-----------------------|-----------------------|-----------------------|
| MAIN   | linux-xanmod-x64v1     | linux-xanmod-x64v2     | linux-xanmod-x64v3     | linux-xanmod-x64v4     |
| EDGE   | -                      | linux-xanmod-edge-x64v2| linux-xanmod-edge-x64v3| linux-xanmod-edge-x64v4|
| LTS    | linux-xanmod-lts-x64v1 | linux-xanmod-lts-x64v2 | linux-xanmod-lts-x64v3 | linux-xanmod-lts-x64v4 |
| RT     | -                      | linux-xanmod-rt-x64v2  | linux-xanmod-rt-x64v3  | linux-xanmod-rt-x64v4  |

::: tip example
For example, we are using the `MAIN` branch and `v3` version.
:::

7. Install the desired version:

```bash
sudo apt install linux-xanmod-x64v3
```

8. Reboot the system:

```bash
sudo reboot
```

After rebooting, check if the XanMod kernel is installed by running:

```bash
uname -a
```

To ensure BBRv3 is installed, execute the following commands:

- Load the modules:

```bash
depmod -a
```

- Display BBR information:

```bash
modinfo tcp_bbr
```

## Enabling BBRv3

To enable BBRv3, follow these steps:

1. Edit the `sysctl.conf` file:

```bash
sudo nano /etc/sysctl.conf
```

2. Add or modify the following lines, then save the file:

```dotenv
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
```

3. Apply the changes:

```bash
sudo sysctl -p
```

4. To ensure the changes were applied, run the following command:

```bash
sysctl net.ipv4.tcp_congestion_control
```

::: tip info
This command should return `bbr`.
:::

::: tip Updating Packages
You can use the following command to update packages:
```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove --purge -y && sudo apt clean -y && sudo apt autoclean -y
```
:::