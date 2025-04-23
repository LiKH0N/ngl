# Overview

tl;dr

> This repository is based on Shadman Shahriar NGL repository https://github.com/ShadowShahriar/ngl. 
I have redised it and added some js which is from codepen. you can find it from https://codepen.io/JulianLaval/pen/KpLXOO

Well I'm new to this git world and don't know much, how to give proper credit. sorry for that 😢


# How does it work?

The main page uses an HTML form with an `action` attribute. The `action` attribute sends a `GET` request to my Cloudflare Worker located at **https://ngl.shadowshahriar.workers.dev**. Since the form has only one input field (`textarea`), it sends the textarea content in the URL string.

The Cloudflare Worker receives the message, checks if it was sent from my GitHub pages, and sends it to [**my Telegram bot**][2].

# License

The source code is licensed under [MIT][3].

[1]: https://ngl.link/
[2]: https://t.me/emmy_the_robot
[3]: https://github.com/ShadowShahriar/ngl/blob/main/LICENSE
