// Fonction Proxy
function FindProxyForURL(url, host) {
  // Lowercase des noms de domaines
  host = host.toLowerCase();

  // Résoudre une première fois l'adresse de destination
  var resolved_ip = dnsResolve(host);

  // Comparer le résultat resolved_ip a la liste des IP privées
  if (
    isPlainHostName(host) ||
    isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
    isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") ||
    isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
    isInNet(resolved_ip, "127.0.0.0", "255.255.255.0") ||
  )
    return "DIRECT";

  FTP, send direct
  if (url.substring(0,4) == "ftp:")
  return "DIRECT";

 
  // Route vers proxy
  return "192.168.3.1:3128";
}
