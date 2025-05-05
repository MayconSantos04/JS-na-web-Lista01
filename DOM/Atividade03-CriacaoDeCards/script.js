const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const profissaoInput = document.getElementById("profissao")
const criarCardBtn = document.getElementById("criar-card")
const cardsContainer = document.getElementById("cards-container")

criarCardBtn.addEventListener('click', () => {
    const nome = nomeInput.value
    const email = emailInput.value
    const profissao = profissaoInput.value

    if (nome === "" || email === "" || profissao === "") return

    const card = document.createElement('div')
    card.classList.add('user-card')

    card.innerHTML = `
        <p>${nome}<p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Profissão:</strong> ${profissao}</p>
        <button class="remover-btn">Remover Card</button>
      `

    card.querySelector('.remover-btn').addEventListener('click', () => {
        cardsContainer.removeChild(card)
    });

    cardsContainer.appendChild(card)

    nomeInput.value = ''
    emailInput.value = ''
    profissaoInput.value = ''
});
