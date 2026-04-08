import React from 'react'

const FunSoftware = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <h1 className='text-3xl font-bold mb-4'>Fun Open Source and Free to use Software</h1>
      <p>Here is some fun software that is Open Source that I like to use for myself in my home lab.</p>
      <ul className="flex flex-col gap-2 mt-4 list-inside">
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://www.proxmox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline  text-red-500">Proxmox</a> | Virtualization Platform</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://www.portainer.io/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Portainer</a> | Container Management</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://nextcloud.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">NextCloud</a> | File Sharing</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://jellyfin.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Jellyfin</a> | Media Server</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://pi-hole.net/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Pi-hole</a> | Network Ad Blocker and DNS</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://joplinapp.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Joplin</a> | Note Taking App</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://www.actualbudget.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Actual Budget</a> | Personal Finance</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://ollama.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Ollama</a> | Local AI Model Runner</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://craftcontroller.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Craft Controller</a> | Minecraft Server Controller</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://nginxproxymanager.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Nginx Reverse Proxy Manager (NPM)</a> | Web Server</li>
        <li className='bg-zinc-700 rounded-2xl p-4 m-1'><a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">Cloudflare</a> | CDN</li>
      </ul>
    </div>
  )
}

export default FunSoftware