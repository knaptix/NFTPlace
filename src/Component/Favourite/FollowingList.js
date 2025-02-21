export default function FollowingList() {
    const users = [
      {
        name: "YFI FAN",
        role: "Cryptoart Collector",
        avatar: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      },
      {
        name: "YFI FAN",
        role: "Cryptoart Collector",
        avatar: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      },
      {
        name: "YFI FAN",
        role: "Cryptoart Collector",
        avatar: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      },
    ];
  
    return (
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center space-x-4">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-semibold text-lg">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.role}</p>
              </div>
            </div>
            <button className="px-6 py-2 border rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 flex items-center space-x-2">
              ✅ Following
            </button>
          </div>
        ))}
      </div>
    );
  }
  