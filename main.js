const monthYearElement = document.getElementById('monthYear')
const datesElement = document.getElementById('dates')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let currentDate = new Date()

const updateCalendar = () => {

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()

    // Primeiro dia do mês atual
    const firstDay = new Date(currentYear, currentMonth, 1)

    // Último dia do mês atual
    const lastDay = new Date(currentYear, currentMonth + 1, 0)

    const totalDays = lastDay.getDate()

    // Dia da semana do primeiro dia
    const firstDayIndex = firstDay.getDay()

    // Dia da semana do último dia
    const lastDayIndex = lastDay.getDay()

    // Nome do mês + ano
    const monthYearString = currentDate.toLocaleString('pt-BR', {
        month: 'long',
        year: 'numeric'
    })

    monthYearElement.textContent = monthYearString

    let datesHTML = ''

    // Dias do mês anterior
    for (let i = firstDayIndex; i > 0; i--) {

        const prevDate = new Date(
            currentYear,
            currentMonth,
            1 - i
        )

        datesHTML += `
            <div class="date inactive">
                ${prevDate.getDate()}
            </div>
        `
    }

    // Dias do mês atual
    for (let i = 1; i <= totalDays; i++) {

        const date = new Date(
            currentYear,
            currentMonth,
            i
        )

        const activeClass =
            date.toDateString() === new Date().toDateString()
                ? 'active'
                : ''

        datesHTML += `
            <div class="date ${activeClass}">
                ${i}
            </div>
        `
    }

    // Dias do próximo mês
    for (let i = 1; i <= 6 - lastDayIndex; i++) {

        const nextDate = new Date(
            currentYear,
            currentMonth + 1,
            i
        )

        datesHTML += `
            <div class="date inactive">
                ${nextDate.getDate()}
            </div>
        `
    }

    datesElement.innerHTML = datesHTML
}


// Mês anterior
prevBtn.addEventListener('click', () => {

    currentDate.setMonth(currentDate.getMonth() - 1)

    updateCalendar()
})


// Próximo mês
nextBtn.addEventListener('click', () => {

    currentDate.setMonth(currentDate.getMonth() + 1)

    updateCalendar()
})


// Inicializa o calendário
updateCalendar()