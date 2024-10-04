---
title: Changing the Default SSH Port
description: Learn how to enhance your server's security by changing the default SSH listening port from 22 to a custom port.
---
# Changing SSH Port in Ubuntu

## Introduction

SSH (Secure Shell) is a protocol used for secure remote access to systems. By default, SSH uses port 22, but changing this port can enhance security by reducing automated attacks. This guide will walk you through the process of changing the SSH port on Ubuntu systems.

::: tip
Changing the SSH port is a common security practice, but it's not a substitute for other security measures like strong passwords and key-based authentication.
:::

## Steps to Change the SSH Listening Port

1. Open the SSH configuration file:

```bash
sudo nano /etc/ssh/sshd_config
```

2. Find the line `#Port 22` and change it to your desired port (e.g., 2222):

```
Port 2222
```

3. Save and exit the file.

4. Restart the SSH service:

```bash
sudo service ssh restart
```


## Ubuntu 23.04 and Later

For Ubuntu 23.04 and later versions, the SSH configuration is managed differently:

1. Edit the SSH socket configuration file:

```bash
sudo nano /lib/systemd/system/ssh.socket
```

2. Modify the `ListenStream` setting to your desired port (e.g., 2222):

```
[Socket]
ListenStream=2222
Accept=no
```

3. Save and exit the file (in nano: Ctrl+X, then Y, then Enter).

4. Reload the systemd daemon and restart the SSH service:

```bash
sudo systemctl daemon-reload
sudo systemctl restart ssh.service
```

## Safety Precautions and Firewall Configuration

::: warning
Always keep your current SSH session open when making these changes. Open a new session to test the new configuration before closing the original.
:::

If you're using UFW:

1. Allow the new SSH port:

```bash
sudo ufw allow 2222/tcp
```

2. Remove the old SSH port rule:

```bash
sudo ufw delete allow 22/tcp
```

3. Reload UFW:

```bash
sudo ufw reload
```

## Testing the New SSH Port

Test the new configuration by opening a new SSH connection:

```bash
ssh -p 2222 username@your_server_ip
```

If successful, you can close your old SSH session.

## Troubleshooting

If you encounter issues:

1. Check if the SSH service is running:

```bash
sudo systemctl status ssh
```

2. Verify the new port is listening:

```bash
sudo ss -tlnp | grep ssh
```

3. Ensure the firewall is configured correctly:

```bash
sudo ufw status
```

::: danger
If you lose access, you may need to use the server's console access to revert changes or troubleshoot further.
:::
