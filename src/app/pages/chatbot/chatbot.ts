import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";

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

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}

  sendMessage() {
    if (this.userInput.trim()) {
      // Add user's message to the chat
      // this.messages.push({ type: "user", text: this.userInput });
      // this.getBotResponse(this.userInput);
      // this.userInput = "";
      this.chat(this.userInput);
    }
  }

  async chat(userInput: string) {
    const loading = await this.loadingCtrl.create({
      message: "Please wait...",
      duration: null,
    });
    loading.present();
    this.messages.push({ type: "user", text: this.userInput });
    this.userInput = "";
    this.http
      .post(
        "http://ec2-35-86-107-107.us-west-2.compute.amazonaws.com:8000/chat",
        { query: userInput }
      )
      .subscribe(
        (data: any) => {
          loading.dismiss();
          console.log(data);
          this.messages.push({ type: "bot", text: data.response });
        },
        async (error) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: "Error",
            message:
              "Error occurred while analyzing the security of the software",
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
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
