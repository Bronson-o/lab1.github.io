function getTelegram()
{
    let username = "@bronson_mss";
    navigator.clipboard.writeText(username);
    alert(`Telegram username: ${username} \n(copied to clipboard)`);
}

let telegram = document.querySelector("#telegram");
telegram.addEventListener("click", getTelegram);

function getPhone()
{
    let phoneNumber = "+380958744448";
    navigator.clipboard.writeText(phoneNumber);
    alert(`Phone number: ${phoneNumber} \n(copied to clipboard)`);
}

let phone = document.querySelector("#phone");
phone.addEventListener("click", getPhone);

function getInstagram()
{
    let link = "https://www.instagram.com/m.tov_/";
    navigator.clipboard.writeText(link);
    alert(`Instagram profile link: ${link} \n(copied to clipboard)`);
}

let instagram = document.querySelector("#instagram");
instagram.addEventListener("click", getInstagram);

function getGitHub()
{
    let link = "https://github.com/Bronson-o";
    navigator.clipboard.writeText(link);
    alert(`GitHub profile link: ${link} \n(copied to clipboard)`);
}

let github = document.querySelector("#github");
github.addEventListener("click", getGitHub);

function getLinkedIn()
{
    let link = "https://www.linkedin.com/in/cryptobible";
    navigator.clipboard.writeText(link);
    alert(`LinkedIn profile link: ${link} \n(copied to clipboard)`);
}

let linkedin = document.querySelector("#linkedin");
linkedin.addEventListener("click", getLinkedIn);
