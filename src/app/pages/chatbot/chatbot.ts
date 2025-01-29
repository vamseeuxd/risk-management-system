import { Component } from "@angular/core";

@Component({
  selector: "page-chatbot",
  templateUrl: "chatbot.html",
  styleUrls: ["./chatbot.scss"],
})
export class ChatbotPage {
  messages: { type: string; text: string }[] = [];
  userInput: string = "";

  // Mock data for chatbot responses
  botReplies: { keyword: string; response: string }[] = [
    { keyword: "hello", response: "Hi there! How can I assist you today?" },
    { keyword: "help", response: "Sure, I am here to help. What do you need?" },
    { keyword: "bye", response: "Goodbye! Have a great day!" },
    { keyword: "", response: "I am your friendly chatbot!" },
    { keyword: "thanks", response: "You are welcome!" },
  ];

  constructor() {}name

  sendMessage() {
    if (this.userInput.trim()) {
      // Add user's message to the chat
      this.messages.push({ type: "user", text: this.userInput });
      this.getBotResponse(this.userInput);
      this.userInput = "";
    }
  }

  getBotResponse(userMessage: string) {
    // Find a matching response from mock data
    const response = this.botReplies.find((reply) =>
      userMessage.toLowerCase().includes(reply.keyword)
    );

    // If a match is found, respond; otherwise, use a default message
    const botResponse = response
      ? response.response
      : "Sorry, I did not understand that. Can you rephrase?";

    // Simulate a delay for the bot's response
    setTimeout(() => {
      this.messages.push({ type: "bot", text: botResponse });
    }, 1000);
  }
}
