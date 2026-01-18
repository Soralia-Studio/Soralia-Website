import { motd } from "@/data/data";

class MessageOfTheDay {
    static getMessage(): string {
        const randomIndex = Math.floor(Math.random() * motd.length);
        return motd[randomIndex];
    }
}

export default MessageOfTheDay;