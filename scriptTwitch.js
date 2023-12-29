

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch Twitch stream status
    async function fetchTwitchStatus() {
        const twitchUsername = "duky";

        try {
            const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${twitchUsername}`, {
                headers: {
                    "Client-ID": "YOUR_TWITCH_CLIENT_ID", // Replace with your Twitch API client ID
                    "Authorization": "Bearer YOUR_TWITCH_ACCESS_TOKEN" // Replace with your Twitch API access token
                }
            });

            if (response.ok) {
                const data = await response.json();

                if (data.data.length > 0) {
                    document.getElementById("twitchStatus").innerHTML = `${twitchUsername} is currently live!`;
                } else {
                    document.getElementById("twitchStatus").innerHTML = `${twitchUsername} is offline.`;
                }
            } else {
                console.error("Error fetching Twitch status:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching Twitch status:", error);
        }
    }

    // Call the function to fetch Twitch status
    fetchTwitchStatus();
});
