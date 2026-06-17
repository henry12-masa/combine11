window.quizData = window.quizData || {};
window.quizData.suseSce = [
  {
    question: "SUSE Certified Engineer 第1問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第2問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第3問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第4問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第5問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第6問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第7問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第8問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第9問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第10問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第11問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第12問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第13問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第14問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第15問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第16問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第17問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第18問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第19問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第20問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第21問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第22問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第23問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第24問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第25問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第26問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第27問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第28問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第29問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第30問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第31問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第32問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第33問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第34問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第35問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第36問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第37問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第38問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第39問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第40問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第41問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第42問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第43問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第44問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第45問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第46問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第47問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第48問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第49問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第50問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第51問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第52問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第53問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第54問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第55問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第56問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第57問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第58問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第59問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第60問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第61問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第62問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第63問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第64問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第65問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第66問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第67問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第68問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第69問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第70問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第71問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第72問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第73問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第74問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第75問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第76問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第77問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第78問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第79問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第80問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第81問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第82問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第83問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第84問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第85問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第86問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第87問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第88問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第89問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第90問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第91問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第92問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第93問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第94問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第95問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第96問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第97問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第98問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第99問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第100問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第101問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第102問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第103問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第104問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第105問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第106問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第107問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第108問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第109問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第110問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第111問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第112問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第113問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第114問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第115問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第116問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第117問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第118問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第119問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第120問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第121問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第122問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第123問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第124問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第125問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第126問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第127問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第128問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第129問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第130問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第131問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第132問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第133問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第134問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第135問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第136問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第137問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第138問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第139問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第140問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第141問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第142問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第143問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第144問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第145問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第146問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第147問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第148問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第149問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第150問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第151問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第152問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第153問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第154問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第155問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第156問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第157問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第158問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第159問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第160問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第161問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第162問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第163問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第164問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第165問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第166問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第167問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第168問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第169問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第170問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第171問：SUSEの高可用性構成で代表的に使われるクラスタスタックはどれですか。",
    choices: ['Pacemaker/Corosync', 'Ksplice/UEK', 'NFS/Sambaのみ', 'BIND/Postfix'],
    answer: 'Pacemaker/Corosync',
    explanation: "SUSE HAではPacemakerとCorosyncが重要です。"
  },
  {
    question: "SUSE Certified Engineer 第172問：Btrfsスナップショットから設定差分を確認する用途に合うツールはどれですか。",
    choices: ['Snapper', 'rsyncd only', 'iptables', 'chronyd'],
    answer: 'Snapper',
    explanation: "Snapperはスナップショットの比較やロールバックに使えます。"
  },
  {
    question: "SUSE Certified Engineer 第173問：SLESの自動インストールで使われる仕組みはどれですか。",
    choices: ['AutoYaST', 'Kickstart専用', 'CloudFormation', 'Terraform state'],
    answer: 'AutoYaST',
    explanation: "AutoYaSTはSUSEの自動インストール構成で使われます。"
  },
  {
    question: "SUSE Certified Engineer 第174問：クラスタリソースの状態確認に使われる代表的なコマンドはどれですか。",
    choices: ['crm status', 'clusterctl build', 'ha-dnf status', 'corosync-mkfs'],
    answer: 'crm status',
    explanation: "crm statusでPacemakerクラスタの状態を確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第175問：SUSEの高度なセキュリティ運用でAppArmorプロファイルを扱う目的はどれですか。",
    choices: ['プロセスのアクセス制御を強化する', 'IPアドレスを自動採番する', 'パーティションを暗号化せず拡張する', 'DNSレコードを生成する'],
    answer: 'プロセスのアクセス制御を強化する',
    explanation: "AppArmorはプロファイルベースの強制アクセス制御です。"
  },
  {
    question: "SUSE Certified Engineer 第176問：システム性能のボトルネック確認でCPUやメモリを対話的に見る代表的なコマンドはどれですか。",
    choices: ['top または htop', 'mkfs.xfs', 'passwd -S', 'grub2-install'],
    answer: 'top または htop',
    explanation: "top/htopはプロセス負荷やメモリ状況の確認に便利です。"
  },
  {
    question: "SUSE Certified Engineer 第177問：SLESで起動失敗時にブートローダ設定を扱う代表的な領域はどれですか。",
    choices: ['GRUB2', 'Pacemaker CIB only', 'NTP pool', 'LDAP schema'],
    answer: 'GRUB2',
    explanation: "GRUB2はLinuxの起動管理で重要です。"
  },
  {
    question: "SUSE Certified Engineer 第178問：ネットワーク冗長化で複数NICを束ねるLinuxの機能はどれですか。",
    choices: ['bonding', 'chroot', 'tmpfs', 'umask'],
    answer: 'bonding',
    explanation: "bondingはNIC冗長化や帯域集約に使われます。"
  },
  {
    question: "SUSE Certified Engineer 第179問：ログを時刻範囲で追うsystemdの代表的なコマンドはどれですか。",
    choices: ['journalctl --since', 'snapper --dns', 'crm mklog', 'zypper --clock'],
    answer: 'journalctl --since',
    explanation: "journalctl --sinceで指定時刻以降のログを確認できます。"
  },
  {
    question: "SUSE Certified Engineer 第180問：SUSE Managerの主な用途として正しいものはどれですか。",
    choices: ['多数のLinuxサーバーのパッチ・設定・監視管理', 'データベース専用SQL実行', '画像編集', 'メール本文の暗号化だけ'],
    answer: '多数のLinuxサーバーのパッチ・設定・監視管理',
    explanation: "SUSE Managerは大規模環境の運用管理に使われます。"
  },
];