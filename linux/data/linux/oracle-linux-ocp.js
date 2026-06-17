window.quizData = window.quizData || {};
window.quizData.oracleLinuxOcp = [
  {
    question: "Oracle Linux Certified Professional 第1問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第2問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第3問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第4問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第5問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第6問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第7問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第8問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第9問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第10問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第11問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第12問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第13問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第14問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第15問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第16問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第17問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第18問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第19問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第20問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第21問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第22問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第23問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第24問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第25問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第26問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第27問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第28問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第29問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第30問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第31問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第32問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第33問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第34問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第35問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第36問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第37問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第38問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第39問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第40問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第41問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第42問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第43問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第44問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第45問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第46問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第47問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第48問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第49問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第50問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第51問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第52問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第53問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第54問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第55問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第56問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第57問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第58問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第59問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第60問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第61問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第62問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第63問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第64問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第65問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第66問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第67問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第68問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第69問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第70問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第71問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第72問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第73問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第74問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第75問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第76問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第77問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第78問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第79問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第80問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第81問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第82問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第83問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第84問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第85問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第86問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第87問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第88問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第89問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第90問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第91問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第92問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第93問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第94問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第95問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第96問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第97問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第98問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第99問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第100問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第101問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第102問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第103問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第104問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第105問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第106問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第107問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第108問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第109問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第110問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第111問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第112問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第113問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第114問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第115問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第116問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第117問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第118問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第119問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第120問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第121問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第122問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第123問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第124問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第125問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第126問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第127問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第128問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第129問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第130問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第131問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第132問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第133問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第134問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第135問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第136問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第137問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第138問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第139問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第140問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第141問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第142問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第143問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第144問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第145問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第146問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第147問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第148問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第149問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第150問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第151問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第152問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第153問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第154問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第155問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第156問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第157問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第158問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第159問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第160問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第161問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第162問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第163問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第164問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第165問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第166問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第167問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第168問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第169問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第170問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第171問：Oracle Linuxでカーネルのライブパッチ適用に使う代表的な仕組みはどれですか。",
    choices: ['Ksplice', 'AutoYaST', 'Snapper', 'YaST Online Update'],
    answer: 'Ksplice',
    explanation: "Kspliceは再起動を減らしてカーネル更新を適用するOracle Linuxの重要機能です。"
  },
  {
    question: "Oracle Linux Certified Professional 第172問：Oracle Linuxで標準的に利用されるOracle提供の高性能カーネルはどれですか。",
    choices: ['Unbreakable Enterprise Kernel', 'Solaris Kernel', 'SUSE Kernel', 'Darwin Kernel'],
    answer: 'Unbreakable Enterprise Kernel',
    explanation: "UEKはOracle Linux向けに最適化されたカーネルです。"
  },
  {
    question: "Oracle Linux Certified Professional 第173問：RPMパッケージを依存関係込みで管理する一般的なコマンドはどれですか。",
    choices: ['dnf または yum', 'apt', 'pkgadd', 'brew'],
    answer: 'dnf または yum',
    explanation: "Oracle Linuxではdnf/yumを使ってRPMパッケージを管理します。"
  },
  {
    question: "Oracle Linux Certified Professional 第174問：systemdでサービスの自動起動を有効化するコマンドはどれですか。",
    choices: ['systemctl enable サービス名', 'systemctl mask サービス名', 'systemctl cat サービス名', 'systemctl isolate サービス名'],
    answer: 'systemctl enable サービス名',
    explanation: "enableは起動時にサービスを開始する設定です。"
  },
  {
    question: "Oracle Linux Certified Professional 第175問：SELinuxの現在の動作モードを確認する代表的なコマンドはどれですか。",
    choices: ['getenforce', 'lsenforce', 'showmode', 'auditctl -r'],
    answer: 'getenforce',
    explanation: "getenforceでEnforcing、Permissive、Disabledを確認できます。"
  },
  {
    question: "Oracle Linux Certified Professional 第176問：firewalldで永続設定を反映する代表的な操作はどれですか。",
    choices: ['firewall-cmd --reload', 'iptables-save --flush', 'dnf reload firewall', 'systemctl compile firewalld'],
    answer: 'firewall-cmd --reload',
    explanation: "firewall-cmd --reloadで永続設定をランタイムへ反映します。"
  },
  {
    question: "Oracle Linux Certified Professional 第177問：LVMで論理ボリュームを作成するコマンドはどれですか。",
    choices: ['lvcreate', 'vgscan', 'pvdisplay', 'mkfs.lvm'],
    answer: 'lvcreate',
    explanation: "lvcreateはVG上にLVを作成するコマンドです。"
  },
  {
    question: "Oracle Linux Certified Professional 第178問：Oracle Linuxで起動時のターゲットを確認・変更するsystemdの概念はどれですか。",
    choices: ['target', 'run recipe', 'bundle', 'zone'],
    answer: 'target',
    explanation: "systemdでは従来のランレベルに近い概念としてtargetを使います。"
  },
  {
    question: "Oracle Linux Certified Professional 第179問：DTraceの主な用途として正しいものはどれですか。",
    choices: ['稼働中システムの動的トレースと性能解析', 'ユーザー作成専用GUI', 'DNSゾーン転送', 'メール配送の暗号化'],
    answer: '稼働中システムの動的トレースと性能解析',
    explanation: "DTraceはカーネルやアプリケーションの挙動を動的に観測します。"
  },
  {
    question: "Oracle Linux Certified Professional 第180問：Oracle Linuxのログ確認でsystemd journalを読む代表的なコマンドはどれですか。",
    choices: ['journalctl', 'logrotate', 'jinspect', 'syslogmake'],
    answer: 'journalctl',
    explanation: "journalctlでsystemd-journaldのログを確認できます。"
  },
];