# Dashboard

 - '/'
 - statystyki dzisiejszych zamówień ( zdalne i lokalne )
 - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

 - '/Login'
 - pola login i hasło
 - guzik zalogowania ( link do dashboardu )

# Widok dostępności stolików
- '/tables' 
  - wybór daty i godziny
  - tabela z listę rezerwacji oraz wydarzenia
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółową

- '/tables/booking/:id'
    - zawiera informacje o rezerwacji
    - umożliwia edycję informacji
 
- '/tables/booking/new'
  - umożliwia stworzenie nowego wydarzenia
- '/tables/events/:id'
   - zawiera informacje o evencie
   - umożliwia edycję informacji
- '/tables/events/new'
   - umożliwia stworzenie nowego eventu

# Widok kelnera

- '/waiter'
 - tabela
   - wiersze = stoliki
   - kolumny = informacje (status oraz czas od ostatniej aktywności)
   - akcje dostępne dla stolik
- '/waiter/order/new'
 - numer stolika (możliwość edycji)
   - menu produktów
   - opcje produktów
   - zamówienie
   - kwota zamówienia
- '/waiter/order/:id'
 - jak wyżej

/waiter
a
/waiter/order/new DONE
numer stolika (możliwość edycji)
menu produktów
opcje produktów
zamówienie
kwota zamówienia
/waiter/order/id DONE
jak wyżej

# Widok kuchni

- '/kitchen'
- dostępna lista zamówień wraz z kolejnością złożenia
- lista zawiera numer stolika
- lista zawiera informacje o zamówieniu
- możliwość zmiany statusu zamówienia