window.onload = async () => {
    const response = await fetch("api/cards");
    const cards = await response.json();

    const container = document.getElementById("cards");
    cards.foreach(card => {
        const div = document.getElementById("div");
        div.className = "card";
        div.innerText = `${card.month} - ${card.name}`;
        container.appendChild(div);
    });
};
