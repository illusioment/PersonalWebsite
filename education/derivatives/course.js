/* ============================================================
   COURSE CONTENT: Derivatives, from first principles to the metals desk.
   Edit text here; index.html never changes.

   A lesson's "body" is a list of blocks:
     "plain text"                    a paragraph
     { f: "formula", note: "..." }   a formula in a box, with an optional caption
     { ex: "Title", lines: [...] }   a worked example
     { list: [...] }                 bullet points
   A quiz question: { q, options: [...], a: index of the right option, why }.
   Contract details are for teaching; always check the exchange's own
   specification page before trading.
   ============================================================ */
window.COURSE = {
  title: "Derivatives, from first principles to the metals desk",
  blurb: "A twelve-module course covering futures, forwards, options and swaps, then applying them to copper, aluminium and steel.",
  weeks: 12,
  outcomes: [
    "Read a futures contract specification and work out what one tick, one contract and one margin call mean in dollars.",
    "Price a forward from spot, interest, storage and convenience yield, and explain contango and backwardation.",
    "Design a hedge for a physical metal position, including the hedge ratio and the basis risk left over.",
    "Read option payoffs, price an option on a future, and use the Greeks to explain a day's profit or loss.",
    "Explain how the LME, COMEX and Shanghai differ, and how a physical trade is priced and hedged against them.",
    "Write a trading plan with position sizes, risk limits and a journal, before any real money is involved."
  ],
  how: [
    "Work through one module a week: read the lessons, redo each worked example on paper, then take the quiz.",
    "Use the calculators to test the formulas with your own numbers. Changing one input at a time is the fastest way to build intuition.",
    "Do the practice tasks. They use live prices and are where the material sticks.",
    "Run this alongside the CME Institute course you've started. CME is strong on contract mechanics; this course adds the pricing theory, options and the metals-specific parts."
  ],
  reading: [
    ["John Hull, Options, Futures, and Other Derivatives", "The standard university text. Modules 1 to 9 follow its order, so it is the place to go deeper."],
    ["CME Institute (cmegroup.com/education)", "Free short courses on futures and options mechanics, plus contract specifications."],
    ["LME education pages (lme.com)", "How prompt dates, carries and warrants work, straight from the exchange."],
    ["Sheldon Natenberg, Option Volatility and Pricing", "The practitioner's book on options, once Modules 5 to 8 feel comfortable."],
    ["CFTC Commitments of Traders report (cftc.gov)", "Weekly positions of producers, funds and others in US futures."]
  ],
  warning: "This course is education, not financial advice. Futures are leveraged: you can lose more than you deposit. Nothing here recommends a trade. Paper-trade until your plan has survived several months, and never trade money you cannot afford to lose.",

  modules: [
    { id: "m1", title: "What derivatives are and who uses them", hours: 3, goal: "Know the four building blocks and the three kinds of participant.",
      lessons: [
        { id: "m1l1", title: "The four building blocks", body: [
          "A derivative is a contract whose value comes from something else: a price, a rate or an index. Nearly every derivative you will meet is built from four pieces.",
          { list: ["Forward: a private agreement to buy or sell something on a future date at a price fixed today.", "Future: a standardised forward traded on an exchange, with gains and losses settled in cash every day.", "Option: the right, but not the obligation, to buy (a call) or sell (a put) at a fixed price. The buyer pays a premium for that right.", "Swap: an agreement to exchange one stream of payments for another, such as a fixed price for a floating average price."] },
          "Forwards, futures and swaps are commitments: both sides must perform. Options are different because one side has a choice, which is why they cost money up front.",
          "Being long means you profit when the price rises. Being short means you profit when it falls. Every derivative has one of each."
        ] },
        { id: "m1l2", title: "Hedgers, speculators and arbitrageurs", body: [
          "Hedgers already have price risk from their business and use derivatives to reduce it. A copper mine is naturally long copper, so it sells futures. A wire maker is naturally short, so it buys them.",
          "Speculators have no underlying exposure. They take on the risk hedgers want to shed, in the hope of being paid for it. Without them, hedgers would often find nobody to trade with.",
          "Arbitrageurs look for the same thing trading at two prices and buy the cheap one while selling the dear one. Their activity is what keeps futures prices tied to spot prices, and one exchange tied to another.",
          { ex: "The same trade, three motives", lines: ["A distributor holding 500 tonnes of unsold aluminium sells futures: a hedge.", "A fund with no metal sells the same futures because it expects prices to fall: speculation.", "A merchant sells those futures and buys physical metal because the gap between them more than pays for storage and interest: arbitrage."] }
        ] },
        { id: "m1l3", title: "Exchanges, clearing and the over-the-counter market", body: [
          "On an exchange, contracts are standardised and every trade is guaranteed by a clearing house, which steps in between buyer and seller. You never need to know or trust the other side.",
          "The clearing house protects itself with margin: a deposit from both sides, topped up daily as prices move. Module 2 covers the mechanics.",
          "Over the counter (OTC), two parties agree their own terms. That allows a contract to match a physical deal exactly, at the cost of counterparty risk and less transparency. Much of the metals business uses OTC contracts that reference exchange prices."
        ] }
      ],
      quiz: [
        { q: "A wire manufacturer will need to buy copper in three months and fears prices will rise. Which position hedges that?", options: ["Sell copper futures", "Buy copper futures", "Buy a copper put", "Sell a copper call"], a: 1, why: "They are short the physical metal (they must buy it later), so the hedge is to be long futures. If prices rise, the futures gain offsets the dearer metal." },
        { q: "What most distinguishes a future from a forward?", options: ["Futures are only for commodities", "Futures are standardised, exchange-traded and settled daily", "Forwards cannot be used for hedging", "Futures always end in physical delivery"], a: 1, why: "Standard terms, a clearing house and daily cash settlement are the defining features. Most futures are closed out before delivery." },
        { q: "Why does an option cost a premium while a future costs nothing to enter?", options: ["Exchanges charge more for options", "The option buyer has a right without an obligation", "Options last longer", "Futures are subsidised"], a: 1, why: "The buyer can walk away if the price moves against them, so the seller must be paid for taking the one-sided risk." }
      ],
      practice: ["Write down, for your own company, whether it is naturally long or short each metal it handles, and for roughly how many tonnes at any time.", "Find one news story this week and identify who in it is a hedger, a speculator or an arbitrageur."] },

    { id: "m2", title: "Futures mechanics", hours: 4, goal: "Turn a contract specification into dollars.",
      lessons: [
        { id: "m2l1", title: "Reading a contract specification", body: [
          "Every futures contract defines the same things: the underlying, the contract size, how the price is quoted, the minimum price move (tick), the delivery months, and how it settles.",
          { ex: "COMEX copper (symbol HG)", lines: ["Size: 25,000 pounds. Quoted in dollars per pound.", "At $5.00 a pound, one contract controls 25,000 × 5.00 = $125,000 of copper.", "Tick: $0.0005 a pound, worth 25,000 × 0.0005 = $12.50.", "A one-cent move is 20 ticks, or $250 per contract."] },
          "Tick value and contract value are the two numbers to know cold for anything you trade. The position calculator does this arithmetic for several metals contracts."
        ] },
        { id: "m2l2", title: "Margin and daily settlement", body: [
          "To open a position you post initial margin, typically a few percent of the contract's value. It is a good-faith deposit, not a down payment.",
          "Each day the exchange marks every position to the settlement price. Losses are taken from your account and gains are added, in cash. This is variation margin. If your balance falls below the maintenance level you get a margin call and must top it up or be closed out.",
          { ex: "A bad day in copper", lines: ["You are long 2 contracts at $5.00. Initial margin is $9,000 a contract, so you post $18,000.", "Copper settles at $4.90, down 10 cents: 200 ticks × $12.50 × 2 contracts = $5,000 lost today.", "That is 28% of your deposit from a 2% move in the metal. This is leverage."] },
          "Daily settlement means a hedge can be right in the end and still cause a cash problem on the way. Companies have failed on margin calls for hedges that would have worked."
        ] },
        { id: "m2l3", title: "Delivery, cash settlement and rolling", body: [
          "Some contracts end in physical delivery of the metal through approved warehouses. Others are cash-settled against a published index: the US hot-rolled coil future, for example, settles to an average of an index for the month.",
          "Very few positions go to delivery. Most traders close out or roll: sell the expiring month and buy a later one. The price difference between the two months is the cost or gain of rolling.",
          "Delivery still matters even if you never use it, because the possibility is what forces the futures price to meet the physical price at expiry."
        ] },
        { id: "m2l4", title: "Volume, open interest and order types", body: [
          "Volume is how many contracts traded in a period. Open interest is how many remain open. Rising prices with rising open interest means new money is entering; rising prices with falling open interest means shorts are covering.",
          { list: ["Market order: trade now at the best available price.", "Limit order: trade only at your price or better.", "Stop order: becomes a market order once a trigger price is hit. Used to cap losses, but it can fill well beyond the trigger in a fast market.", "Spread order: buy one month and sell another as a single trade."] },
          "Liquidity is concentrated in a few nearby months. Trading illiquid months costs more, because the gap between the bid and the offer is wider."
        ] }
      ],
      quiz: [
        { q: "You are short 3 COMEX copper contracts and the price rises 4 cents. What is the day's result?", options: ["Gain of $1,000", "Loss of $1,000", "Loss of $3,000", "Gain of $3,000"], a: 2, why: "4 cents is 80 ticks. 80 × $12.50 × 3 = $3,000, and a short position loses when the price rises." },
        { q: "What is variation margin?", options: ["The fee paid to the broker", "The deposit needed to open a position", "The daily cash transfer of gains and losses", "The interest earned on margin"], a: 2, why: "Initial margin opens the position; variation margin is the daily mark-to-market settlement." },
        { q: "Open interest falls sharply while the price rises. The most likely explanation is:", options: ["New buyers are entering", "Short positions are being closed", "Deliveries are increasing", "Margin has been cut"], a: 1, why: "Falling open interest means positions are being closed. With a rising price, that points to shorts buying back." }
      ],
      practice: ["Open the contract specifications for COMEX copper and one LME metal. Write down size, tick, tick value and the current initial margin.", "Using today's price, work out the dollar value of one contract and what a 3% adverse move would cost."],
      tools: ["position"] },

    { id: "m3", title: "Pricing forwards and futures", hours: 5, goal: "Explain why a futures price sits where it does relative to spot.",
      lessons: [
        { id: "m3l1", title: "No-arbitrage and the cost of carry", body: [
          "A forward price is not a forecast. It is the price at which nobody can make a riskless profit by buying the metal today, storing it and delivering it later.",
          "Buying now and carrying the metal costs interest on the money tied up, plus storage and insurance. So the fair forward price is the spot price plus those costs.",
          { f: "F = S × e^((r + u) × T)", note: "S spot price, r interest rate, u storage cost as a yearly fraction of value, T time in years." },
          { ex: "Six-month aluminium", lines: ["Spot $3,000 a tonne, interest 5%, storage 2% a year, T = 0.5.", "F = 3,000 × e^(0.07 × 0.5) = 3,000 × 1.0356 = $3,107.", "If the market quoted $3,200, you could buy spot, sell forward, pay about $107 to carry and lock in $93."] }
        ] },
        { id: "m3l2", title: "Convenience yield, contango and backwardation", body: [
          "Metal in your hands has a benefit that a futures contract lacks: you can keep a plant running or fill an urgent order. That benefit is called the convenience yield, and it pulls the forward price down.",
          { f: "F = S × e^((r + u − y) × T)", note: "y is the convenience yield. It is not observed directly; it is whatever makes the equation fit." },
          "When stocks are plentiful, convenience yield is near zero and forwards sit above spot by roughly the cost of carry. That is contango. When stocks are tight, holders value immediate metal highly, y is large, and spot sits above forwards. That is backwardation.",
          "Contango is capped by arbitrage, because anyone can buy and store. Backwardation has no such cap: you cannot deliver metal you do not have. That asymmetry is why squeezes produce violent backwardations."
        ] },
        { id: "m3l3", title: "Basis, convergence and roll yield", body: [
          "Basis is the difference between the price of the thing you actually own and the futures price. Definitions vary; this course uses basis = physical price − futures price.",
          "At expiry, the futures price and the deliverable spot price must meet. This is convergence. Before then the basis moves around, and that movement is the risk a hedger keeps.",
          "Roll yield is what a futures holder earns or pays from the curve's shape. In backwardation a long position rolls from a dear nearby month into a cheaper later one and gains as time passes. In contango the long pays. Over years, this can matter more than the price change."
        ] }
      ],
      quiz: [
        { q: "Spot copper is $11,000, interest is 5%, storage 1%, and the one-year forward is $11,100. What does that imply?", options: ["An arbitrage profit from buying spot and selling forward", "A positive convenience yield of about 5%", "The market expects prices to fall", "Storage costs are negative"], a: 1, why: "Full carry would put the forward near 11,000 × e^0.06 ≈ $11,680. The forward is far below that, so holders are getting a convenience yield of roughly 5%. The forward is not a forecast." },
        { q: "Why can backwardation become extreme while contango cannot?", options: ["Exchanges limit contango", "Storage arbitrage caps contango, but nothing lets you sell metal you don't have", "Interest rates cap backwardation", "Speculators only trade backwardations"], a: 1, why: "In contango anyone can buy, store and deliver. In backwardation the reverse trade needs physical metal now, which is the thing in short supply." },
        { q: "You hold long futures and roll them each month in a steady backwardation with flat spot prices. Over time you:", options: ["Lose the roll each month", "Gain the roll each month", "Break even", "Cannot roll in backwardation"], a: 1, why: "You sell the higher nearby and buy the lower deferred, and the deferred rises toward spot as it matures." }
      ],
      practice: ["Take today's LME cash and 3-month copper prices from the Metals Desk. Work out the implied convenience yield with the carry calculator, assuming 5% interest and 1% storage.", "Do the same for aluminium and compare the two. Which market is tighter?"],
      tools: ["carry"] },

    { id: "m4", title: "Hedging with futures", hours: 5, goal: "Size a hedge and know what risk remains.",
      lessons: [
        { id: "m4l1", title: "Short and long hedges", body: [
          "A short hedge protects something you own or will sell: sell futures now, buy them back when you sell the metal. A long hedge protects something you must buy: buy futures now, sell them when you buy the metal.",
          { ex: "A distributor's inventory hedge", lines: ["You buy 200 tonnes of aluminium at $3,000 and expect to sell it over two months.", "Sell 8 LME contracts (25 tonnes each) at $3,010.", "Two months on, the market is $2,800. Your metal sells for $200 less: −$40,000.", "You buy back the futures at $2,805: gain of $205 × 200 = +$41,000.", "Net +$1,000. The hedge turned a $40,000 loss into roughly nothing."] },
          "Note what the hedge did: it removed the loss, and it would equally have removed the gain. A hedge fixes a price. It is not a way to make money."
        ] },
        { id: "m4l2", title: "Basis risk", body: [
          "A hedge swaps price risk for basis risk. Your result depends on how the gap between your physical price and the futures price changes while the hedge is on.",
          { f: "Effective price = futures price when hedged + basis when lifted" },
          "Basis risk comes from three mismatches: the product (your coil is not the index), the place (your metal is in Portland, not a delivery warehouse) and the timing (you sell on the 12th, the contract expires on the 20th).",
          "For steel sheet and aluminium premiums these mismatches are large, which is why hedging them is harder than hedging copper cathode."
        ] },
        { id: "m4l3", title: "The minimum-variance hedge ratio", body: [
          "If your physical price does not move one-for-one with the future, hedging 100% of the tonnage is not optimal. The ratio that minimises the variance of the hedged position is:",
          { f: "h* = ρ × (σS ÷ σF)", note: "ρ is the correlation between changes in your physical price and the futures price; σS and σF are their volatilities." },
          { f: "Contracts = h* × (exposure ÷ contract size)" },
          { ex: "Cross-hedging coil", lines: ["Your cold-rolled coil price has volatility 22%, hot-rolled futures 30%, correlation 0.8.", "h* = 0.8 × (22 ÷ 30) = 0.59.", "For 1,000 short tons of exposure and a 20-ton contract: 0.59 × 1,000 ÷ 20 ≈ 29 contracts, not 50."] },
          "The square of the correlation tells you how much of the variance the hedge removes: 0.8² = 64%. A correlation of 0.5 removes only a quarter."
        ] },
        { id: "m4l4", title: "When hedges go wrong", body: [
          { list: ["Cash strain: futures losses are paid daily in cash while the offsetting physical gain arrives later.", "Over-hedging: selling more futures than you have metal turns a hedge into a speculative short.", "Volume risk: you hedged 500 tonnes of sales and the customer took 300.", "Stale hedges: the physical deal changed and nobody adjusted the futures."] },
          "A written hedging policy answers four questions in advance: what exposures are hedged, what share of them, with which instruments, and who is allowed to trade."
        ] }
      ],
      quiz: [
        { q: "You hedge inventory by selling futures at $3,000. When you sell the metal the future is $2,700 and your physical price is $2,760. What is your effective price?", options: ["$2,760", "$3,000", "$3,060", "$2,700"], a: 2, why: "Physical $2,760 plus futures gain $300 = $3,060. Equivalently, hedged futures price $3,000 plus the basis of +$60." },
        { q: "Correlation between your product and the future is 0.6. Roughly how much of your price variance can the best hedge remove?", options: ["60%", "36%", "40%", "100%"], a: 1, why: "Variance reduction is the square of the correlation: 0.6² = 36%." },
        { q: "A company sells futures on twice the tonnage it owns. It is:", options: ["Fully hedged with a safety margin", "Net short and speculating on a price fall", "Protected from margin calls", "Using the minimum-variance ratio"], a: 1, why: "Beyond the physical exposure, extra shorts are an outright bet. Over-hedging is how hedge programmes become trading losses." }
      ],
      practice: ["Pick one product you sell. Estimate its correlation with the nearest exchange contract from a year of monthly prices, then compute h* with the hedge ratio calculator.", "Write a one-paragraph hedging policy for a single product: what, how much, with what, and who decides."],
      tools: ["hedge", "position"] },

    { id: "m5", title: "Options: payoffs and parity", hours: 4, goal: "Read any option position as a payoff diagram.",
      lessons: [
        { id: "m5l1", title: "Calls, puts and the four basic positions", body: [
          "A call gives the right to buy at the strike price; a put gives the right to sell. You can buy or sell either, giving four basic positions.",
          { list: ["Long call: pay premium, profit if the price rises above strike plus premium. Loss limited to the premium.", "Short call: receive premium, lose without limit if the price rises.", "Long put: pay premium, profit if the price falls below strike minus premium.", "Short put: receive premium, lose heavily if the price falls."] },
          { f: "Call payoff at expiry = max(F − K, 0)      Put payoff = max(K − F, 0)", note: "F is the futures price at expiry, K the strike." },
          "Buyers have limited loss and need a big move to win. Sellers collect a small amount most of the time and occasionally lose a great deal."
        ] },
        { id: "m5l2", title: "Intrinsic value, time value and moneyness", body: [
          "An option's premium has two parts. Intrinsic value is what it would be worth if exercised now. Time value is the rest: what the market pays for the chance of further movement before expiry.",
          "A call is in the money when the price is above the strike, at the money when they are equal, and out of the money when the price is below. For puts it is the reverse.",
          { ex: "Reading a quote", lines: ["Copper future at $5.00. The $4.80 call trades at $0.27.", "Intrinsic value: 5.00 − 4.80 = $0.20. Time value: $0.07.", "The $5.20 call trades at $0.06: all time value, since it is out of the money."] },
          "Time value is largest at the money and decays to zero at expiry, slowly at first and quickly at the end."
        ] },
        { id: "m5l3", title: "Put-call parity", body: [
          "Buying a call and selling a put at the same strike gives the same payoff as being long the future from that strike. Since the two packages do the same thing, they must cost the same.",
          { f: "C − P = e^(−r × T) × (F − K)", note: "For European options on a future." },
          "Parity ties the whole option market together. If you know the call price you know the put price. It also means a call can be turned into a put, and the reverse, by adding a futures position.",
          { ex: "Checking a market", lines: ["F = $5.00, K = $5.00: parity says C = P. An at-the-money call and put cost the same.", "F = $5.00, K = $4.80, three months, r = 5%: C − P = 0.9876 × 0.20 = $0.1975."] }
        ] },
        { id: "m5l4", title: "Options on futures, American and European", body: [
          "Most exchange-traded commodity options are options on a future: exercising a call gives you a long futures position at the strike.",
          "European options can only be exercised at expiry; American options at any time. Early exercise of an option on a future is rarely worthwhile, so the two are usually priced close together.",
          "Options expire before their underlying future, often about a month earlier. Check the calendar: the last day to act on an option is not the last day of the future."
        ] }
      ],
      quiz: [
        { q: "You buy a $5.00 copper call for $0.12. At expiry the future is $5.09. Your result per pound is:", options: ["+$0.09", "−$0.03", "−$0.12", "+$0.21"], a: 1, why: "The call pays 5.09 − 5.00 = $0.09, less the $0.12 premium = −$0.03. In the money is not the same as profitable." },
        { q: "The future is $4.00. A $4.20 put trades at $0.31. Its time value is:", options: ["$0.31", "$0.20", "$0.11", "Zero"], a: 2, why: "Intrinsic value is 4.20 − 4.00 = $0.20, so time value is 0.31 − 0.20 = $0.11." },
        { q: "Long call plus short put at the same strike and expiry is equivalent to:", options: ["A long straddle", "A long future", "A short future", "A riskless bond"], a: 1, why: "Above the strike the call pays; below it the short put loses the same amount. That is a long futures payoff from the strike." }
      ],
      practice: ["In the payoff builder, draw each of the four basic positions and find the breakeven by eye before reading the answer.", "Look up a real option chain for copper. Pick three strikes and split each premium into intrinsic and time value."],
      tools: ["payoff"] },

    { id: "m6", title: "Option pricing and volatility", hours: 5, goal: "Know what drives an option's price and what implied volatility means.",
      lessons: [
        { id: "m6l1", title: "The idea behind pricing: replication", body: [
          "An option can be copied by holding the right amount of the underlying and adjusting it as the price moves. If a portfolio of futures and cash reproduces the option's payoff, the option must cost what that portfolio costs to run.",
          "The binomial model makes this concrete. Over one step the price goes up or down by set amounts. Work out the option's value in each case, then find the futures position that makes you indifferent. Chain many small steps together and you have a price.",
          "The surprising result is that the expected direction of the market does not appear in the answer. Only volatility, time, the strike, the price and the interest rate do."
        ] },
        { id: "m6l2", title: "Black-76 for options on futures", body: [
          "Fischer Black's 1976 model is the market standard for European options on futures. It is Black-Scholes with the futures price in place of the stock price.",
          { f: "C = e^(−rT) × [F × N(d1) − K × N(d2)]\nP = e^(−rT) × [K × N(−d2) − F × N(−d1)]\nd1 = [ln(F ÷ K) + σ²T ÷ 2] ÷ (σ√T)        d2 = d1 − σ√T", note: "N is the standard normal cumulative distribution; σ is annual volatility." },
          "You do not need to memorise it, but you should know the inputs. Five go in: futures price, strike, time, interest rate and volatility. Four of them are observable. Volatility is the one you have to supply.",
          "The option pricer applies this formula and shows how the price responds as you change each input."
        ] },
        { id: "m6l3", title: "Implied volatility, skew and term structure", body: [
          "Because volatility is the only unknown, the market turns the formula around: given the option's traded price, what volatility makes the model match? That number is implied volatility, and it is how option prices are quoted and compared.",
          "Implied volatility is the market's price for uncertainty, not a prediction that will come true. Buying an option is buying volatility; you profit if the market moves more than the price implied.",
          { f: "Rough daily move ≈ implied volatility ÷ 16", note: "There are about 252 trading days and √252 ≈ 16. A 24% volatility implies typical daily moves of about 1.5%." },
          "Different strikes trade at different implied volatilities (the skew or smile), and so do different expiries (the term structure). In metals, calls often carry higher volatility than puts when supply is tight, because price spikes come from shortages."
        ] }
      ],
      quiz: [
        { q: "Which input to Black-76 is not directly observable?", options: ["The futures price", "The interest rate", "Volatility", "Time to expiry"], a: 2, why: "Volatility over the option's remaining life is unknown, which is why the market quotes the implied figure." },
        { q: "Copper options imply 32% annual volatility. A typical daily move is about:", options: ["0.5%", "2%", "8%", "32%"], a: 1, why: "32 ÷ 16 = 2% a day." },
        { q: "You buy an at-the-money straddle at 25% implied volatility. Over its life the market realises 15%. You most likely:", options: ["Profit, because you were long", "Lose, because the market moved less than you paid for", "Break even", "Profit only if prices rose"], a: 1, why: "A long option position needs realised movement to exceed what the premium implied." }
      ],
      practice: ["In the option pricer, price an at-the-money three-month option at 20%, 30% and 40% volatility. Note that the price is almost proportional to volatility.", "Compute the 30-day historical volatility of copper from daily closes and compare it with a quoted implied volatility."],
      tools: ["black"] },

    { id: "m7", title: "The Greeks and managing option risk", hours: 4, goal: "Explain an option's daily profit or loss from its sensitivities.",
      lessons: [
        { id: "m7l1", title: "Delta and gamma", body: [
          "Delta is how much the option's price changes for a one-unit move in the future. A delta of 0.5 means the option behaves like half a futures contract right now. Calls have deltas from 0 to 1, puts from −1 to 0.",
          "Delta is also the hedge ratio: to neutralise 10 calls with delta 0.4 you sell 4 futures.",
          "Gamma is how fast delta changes as the price moves. Long options have positive gamma: they get longer as the market rises and shorter as it falls, which is exactly what you want. Short options have the reverse.",
          "Gamma is highest at the money and close to expiry. A short at-the-money option in its last week is the most dangerous position in this course."
        ] },
        { id: "m7l2", title: "Theta and vega", body: [
          "Theta is the value an option loses each day from the passage of time. It is the rent paid for holding gamma. Long options lose theta; short options collect it.",
          "Vega is the change in price for a one-point change in implied volatility. Long options gain when implied volatility rises, even if the futures price does not move.",
          { list: ["Long options: positive gamma, positive vega, negative theta.", "Short options: negative gamma, negative vega, positive theta."] },
          "There is no position with good gamma and good theta at once. Every option trade is a choice about which one you are paying for."
        ] },
        { id: "m7l3", title: "Delta hedging and explaining P&L", body: [
          "A delta-hedged option has no exposure to small price moves. What remains is a bet on volatility: whether the market moves more or less than the premium assumed.",
          { f: "Daily P&L ≈ Δ × move + ½ × Γ × move² + Θ × 1 day + vega × change in implied vol" },
          { ex: "Reading a day", lines: ["You are long calls, delta-hedged. Copper moves 6 cents.", "Delta P&L is zero by construction. Gamma earns ½ × Γ × 0.06².", "Theta costs one day. If the gamma gain exceeds theta, the day was profitable.", "The breakeven move is the daily move implied by the volatility you paid."] },
          "Being able to split a day's result into these four pieces is the main skill of an options desk."
        ] }
      ],
      quiz: [
        { q: "You are short 20 calls with delta 0.35 each. To be delta neutral you should:", options: ["Sell 7 futures", "Buy 7 futures", "Buy 20 futures", "Sell 20 puts"], a: 1, why: "Short calls are short delta: −20 × 0.35 = −7. Buying 7 futures brings it to zero." },
        { q: "Which position benefits most from a quiet market with no price change?", options: ["Long straddle", "Short straddle", "Long call", "Long put"], a: 1, why: "A short straddle collects theta and has no gamma losses if nothing moves. It is also the position with unlimited loss." },
        { q: "Implied volatility jumps 5 points with the futures price unchanged. A long option holder:", options: ["Loses from theta only", "Gains through vega", "Is unaffected", "Gains through delta"], a: 1, why: "Long options are long vega, so a rise in implied volatility raises their value." }
      ],
      practice: ["In the option pricer, watch delta and gamma as you move the futures price through the strike with 90 days to expiry, then with 5 days.", "Price an at-the-money option today and with one day less. The difference is theta. Compare it with the gamma gain from a 1% move."],
      tools: ["black"] },

    { id: "m8", title: "Option strategies for hedgers and traders", hours: 4, goal: "Choose a structure to fit a view and a budget.",
      lessons: [
        { id: "m8l1", title: "Protecting a position: puts, calls and collars", body: [
          "A producer or inventory holder buys a put to set a floor while keeping the upside. A consumer buys a call to set a cap while keeping the downside. Both cost premium.",
          "A collar pays for the protection by giving something up. An inventory holder buys a put and sells a call above the market: a floor and a ceiling. Choose the strikes so the premiums cancel and it is a zero-cost collar.",
          { ex: "Collar on aluminium inventory", lines: ["Future $3,000. Buy the $2,850 put for $60, sell the $3,180 call for $60. Net cost zero.", "Below $2,850 you are protected. Above $3,180 you give up further gains.", "Between the strikes you are unhedged."] },
          "Zero cost is not free: you paid with the upside. Whether that is a good deal depends on your margins, not on a market view."
        ] },
        { id: "m8l2", title: "Spreads: limited risk, limited reward", body: [
          "A bull call spread buys a call and sells a higher-strike call. It costs less than the call alone and its gain is capped at the difference between strikes minus the premium paid.",
          "A bear put spread is the mirror image: buy a put, sell a lower-strike put.",
          "Spreads reduce the cost of being wrong about timing and volatility. They are the sensible default for a directional view, because an outright long option needs a large move quickly to pay."
        ] },
        { id: "m8l3", title: "Trading volatility: straddles, strangles and calendars", body: [
          "A long straddle buys a call and a put at the same strike. It profits from a large move either way and loses if the market sits still. A strangle uses out-of-the-money strikes: cheaper, but it needs a bigger move.",
          "Selling these structures collects premium and profits from calm, with losses that are open-ended. Most blow-ups in options come from short volatility positions sized as if calm would last.",
          "A calendar spread sells a near expiry and buys a later one at the same strike, a view that the near term will be quiet relative to the far term."
        ] },
        { id: "m8l4", title: "Average-price options", body: [
          "Physical metal is usually priced on the average of a month's settlements, not one day's. An ordinary option hedges a single day's price, which leaves a mismatch.",
          "Average-price (Asian) options pay out on the monthly average. The LME lists them as Traded Average Price Options. Because an average is less volatile than a single price, they are cheaper than the equivalent ordinary option.",
          "For a business that buys and sells on monthly averages, these are often the natural option hedge."
        ] }
      ],
      quiz: [
        { q: "An inventory holder wants a floor at no upfront cost. Which structure fits?", options: ["Buy a put and sell a call above the market", "Buy a call and sell a put", "Buy a straddle", "Sell a put spread"], a: 0, why: "The put gives the floor; the sold call pays for it and sets a ceiling. That is a collar." },
        { q: "The maximum profit on a bull call spread bought for $0.05 with strikes $5.00 and $5.20 is:", options: ["Unlimited", "$0.20", "$0.15", "$0.05"], a: 2, why: "Strike width $0.20 minus the $0.05 paid = $0.15." },
        { q: "Why is an average-price option cheaper than an ordinary one?", options: ["It has no time value", "An average is less volatile than a single day's price", "It cannot be exercised", "Exchanges subsidise it"], a: 1, why: "Averaging smooths out extremes, lowering the effective volatility and so the premium." }
      ],
      practice: ["Load each preset in the payoff builder (collar, bull spread, straddle). For each, write one sentence on when you would use it.", "Design a zero-cost collar for 100 tonnes of copper inventory using real option quotes. What upside did you give up?"],
      tools: ["payoff", "black"] },

    { id: "m9", title: "Swaps and the over-the-counter market", hours: 3, goal: "Understand the instrument most physical hedges actually use.",
      lessons: [
        { id: "m9l1", title: "Commodity swaps", body: [
          "In a commodity swap one side pays a fixed price and the other pays a floating price, usually the monthly average of an exchange or index price, on an agreed tonnage. Only the difference changes hands, in cash.",
          { ex: "A consumer's fixed-price swap", lines: ["You buy 100 tonnes of copper a month at the LME monthly average.", "You enter a swap paying fixed $11,000 and receiving the monthly average.", "If the average is $11,600, you receive $600 × 100 = $60,000, offsetting your dearer metal.", "If it is $10,500, you pay $50,000, and your metal is cheaper by the same amount.", "Either way your cost is $11,000."] },
          "A swap is a string of forwards. Its fixed price is close to the average of the forward prices for each month, weighted by tonnage and discounted."
        ] },
        { id: "m9l2", title: "Counterparty risk, documentation and clearing", body: [
          "An OTC contract is only as good as the firm on the other side. If your swap is deeply in your favour and the counterparty fails, the hedge disappears exactly when you need it.",
          "Standard legal agreements (the ISDA Master Agreement, with a credit annex setting out collateral) manage this risk. Many OTC trades are now also cleared, which gives them exchange-style margining.",
          "Before trading OTC, know your credit line with the counterparty, what collateral can be called, and how the contract would be valued if either side defaulted."
        ] },
        { id: "m9l3", title: "Choosing between futures, swaps and options", body: [
          { list: ["Futures: transparent and liquid, with daily cash margin. Best when a listed contract matches your exposure.", "Swaps: tailored tonnage, dates and averaging, with credit terms instead of daily cash. Best for monthly-average physical pricing.", "Options: protection that keeps the favourable side, for a premium. Best when volume is uncertain or you cannot afford to be locked in."] },
          "Many programmes mix them: swaps or futures for the tonnage you are sure of, options for the part that might not happen."
        ] }
      ],
      quiz: [
        { q: "In a fixed-for-floating swap where you pay fixed, you benefit when:", options: ["The floating average is below the fixed price", "The floating average is above the fixed price", "Volatility rises", "Interest rates fall"], a: 1, why: "You receive floating and pay fixed, so you are paid the difference when the average exceeds the fixed price." },
        { q: "The fixed price of a 12-month swap is closest to:", options: ["Today's spot price", "The average of the 12 monthly forward prices", "The highest forward price", "Last year's average"], a: 1, why: "A swap is a strip of forwards, so its fair fixed price is their weighted, discounted average." },
        { q: "Your sales volume for next quarter is uncertain. Which hedge avoids being over-hedged if sales disappoint?", options: ["Sell futures on the full forecast", "Buy puts on the uncertain part", "Enter a swap on the full forecast", "Do nothing"], a: 1, why: "An option does not commit you, so if the volume never appears your loss is limited to the premium." }
      ],
      practice: ["Take the next six LME monthly forward prices for one metal and compute a simple average. That is roughly where a six-month swap would be struck.", "List the counterparties your company could trade OTC with, and what credit terms each would need."] },

    { id: "m10", title: "How the metals markets work", hours: 6, goal: "Trade and hedge on the LME and COMEX without being surprised by their quirks.",
      lessons: [
        { id: "m10l1", title: "The LME's date structure", body: [
          "The LME grew out of the time it took a ship to bring copper from Chile: about three months. Its benchmark is still the 3-month price, and unlike other exchanges it trades a separate contract for every business day out to three months, then weekly, then monthly.",
          "Each delivery date is called a prompt date. The cash price is for delivery in two business days. Monthly liquidity gathers on the third Wednesday of each month.",
          "Because your position has a specific date, you manage it with carries: buying one date and selling another to move a position earlier or later. Borrowing means buying the near date and selling the far; lending is the reverse.",
          "Standard LME contracts are 25 tonnes for copper, aluminium and zinc. Unlike a typical future, gains and losses on an LME forward are realised at the prompt date, with margin called against unrealised losses in the meantime."
        ] },
        { id: "m10l2", title: "Warrants, stocks and official prices", body: [
          "Physical delivery on the LME is by warrant: a document of title to a specific lot in an approved warehouse. The seller chooses the location and brand, so a buyer taking delivery may get metal in an inconvenient place. This is why the LME is a market of last resort for physical metal and a pricing reference first.",
          "Daily stock reports show metal on warrant and cancelled warrants, which are earmarked to leave. Falling stocks and rising cancellations go with tightening spreads.",
          "The official prices, set once a day, are the ones physical contracts reference. The closing prices are used for margining. The Metals Desk shows official cash and 3-month prices and the spread between them."
        ] },
        { id: "m10l3", title: "COMEX, Shanghai and the arbitrage between them", body: [
          "COMEX in New York trades conventional monthly futures. Copper is 25,000 pounds, quoted in dollars per pound, deliverable in US warehouses. Shanghai trades in yuan per tonne including Chinese tax.",
          { f: "$ per tonne = $ per pound × 2,204.62" },
          "The same metal in three places should cost the same after freight, duties, financing and currency. When it does not, merchants ship metal from the cheap location to the dear one. That flow is the arbitrage, and watching it tells you where metal is needed.",
          "Tariffs break the link. A US import duty on a metal lets New York trade far above London for as long as the duty, or the threat of it, lasts. Trading that gap is trading politics as much as metal."
        ] },
        { id: "m10l4", title: "US steel, premium and scrap contracts", body: [
          "Steel and regional premiums have no warehouse delivery system, so their futures are cash-settled against published price indexes.",
          { list: ["Hot-rolled coil: 20 short tons, settled to the monthly average of an index of Midwest mill prices. At $1,000 a ton one contract is $20,000, and $1 is worth $20.", "Midwest aluminium premium: settled to the monthly average of the assessed premium, in dollars per pound.", "Busheling scrap: settled to a monthly assessed Chicago scrap price."] },
          "Liquidity is much thinner than in copper. Expect wide bid-offer gaps, trade with limit orders, and plan how you would exit before you enter.",
          "For a sheet and coil distributor these are the contracts closest to the business. An all-in aluminium price is hedged in two pieces: the LME price and the Midwest premium."
        ] },
        { id: "m10l5", title: "Physical pricing and offset hedging", body: [
          "A physical contract usually sets a formula, not a price: an exchange average over a quotational period (QP), plus a premium. For example, 'LME cash average of the month after shipment, plus $350'.",
          "A merchant buys on one QP and sells on another. The gap between the two pricing periods is the exposure, and futures are used to bridge it.",
          { ex: "Pricing in and pricing out", lines: ["You buy 500 tonnes priced on the March average and sell them priced on the May average.", "During March, as your purchase prices day by day, you sell futures: 500 ÷ 21 trading days ≈ 24 tonnes a day.", "During May, as your sale prices, you buy them back at the same rate.", "Your margin is the premium difference plus or minus the March to May spread, which you could have locked with a carry on day one."] },
          "The merchant's profit is premium and spread, not direction. This is the core habit to learn if your goal is metals trading: run a flat price book and earn from structure."
        ] }
      ],
      quiz: [
        { q: "On the LME, 'borrowing' means:", options: ["Taking a loan against warrants", "Buying a nearby date and selling a later date", "Selling a nearby date and buying a later date", "Buying an option"], a: 1, why: "Borrowing is buying near and selling far. You profit if the backwardation widens." },
        { q: "COMEX copper is $5.20 a pound. In dollars per tonne that is about:", options: ["$5,200", "$10,400", "$11,464", "$13,000"], a: 2, why: "5.20 × 2,204.62 = $11,464." },
        { q: "You buy metal priced on the April average and sell it priced on the June average, both unhedged. You are exposed to:", options: ["Nothing; the tonnages match", "The difference between the April and June average prices", "Only the premium", "Only currency"], a: 1, why: "Matching tonnage is not enough. The two pricing periods differ, so you carry the price change between them until you hedge it." },
        { q: "One US hot-rolled coil contract moves from $1,000 to $1,050 a ton. A long position gains:", options: ["$50", "$500", "$1,000", "$5,000"], a: 2, why: "20 short tons × $50 = $1,000." }
      ],
      practice: ["On the Metals Desk, find which LME metals are in backwardation today and check whether their stocks are falling.", "Take one real purchase and one real sale from work. Write out each pricing formula and identify the unhedged gap between them.", "Convert today's COMEX copper price to dollars per tonne and compare it with LME 3-month. What explains the difference?"],
      tools: ["position", "carry"] },

    { id: "m11", title: "Spreads, risk management and the trader's routine", hours: 5, goal: "Size positions and limit losses before thinking about profits.",
      lessons: [
        { id: "m11l1", title: "Trading the curve", body: [
          "A calendar spread is long one month and short another. It isolates the shape of the curve from the level of prices, and it is how most professional metals risk is taken.",
          "The theory of storage links the spread to inventory: when stocks are high, spreads sit near full carry; as stocks fall, they tighten and flip to backwardation. Spread traders are really trading inventory expectations.",
          "Spread positions carry lower margin than outright positions, but they are not low risk. In a squeeze a nearby spread can move further in a day than the flat price does in a month."
        ] },
        { id: "m11l2", title: "Position sizing and limits", body: [
          "Decide what you can lose before deciding what to trade. A common rule is to risk no more than 1% of capital on any one idea.",
          { f: "Contracts = (capital × risk %) ÷ (stop distance × value per point)" },
          { ex: "Sizing a copper trade", lines: ["Capital $200,000, risk 1% = $2,000.", "Stop 6 cents away. One cent is $250 a contract, so the risk per contract is $1,500.", "2,000 ÷ 1,500 = 1.3, so trade 1 contract."] },
          "Set limits at three levels: per trade, per day and in total. A daily loss limit that makes you stop trading is worth more than any entry technique."
        ] },
        { id: "m11l3", title: "Measuring risk", body: [
          "Value at risk (VaR) estimates the loss you should not exceed on most days. A simple version for one position:",
          { f: "1-day 95% VaR ≈ 1.65 × position value × daily volatility" },
          "VaR says nothing about how bad the other 5% of days can be. Pair it with stress tests: what happens if the price gaps 10%, if the spread doubles, or if you cannot trade for two days?",
          "For options, also test volatility moving up and down. For any leveraged position, test whether you could meet the margin calls on the way."
        ] },
        { id: "m11l4", title: "Routine, records and rules", body: [
          { list: ["Before the open: prices, spreads, stocks, the day's data releases and your open positions.", "For every trade, written beforehand: the reason, entry, stop, target and size.", "After the close: update the journal with what happened and what you would do differently.", "Weekly: read the Commitments of Traders report and review your results by strategy."] },
          "Markets are regulated. In the US, the CFTC sets position limits and prohibits manipulation, including spoofing (placing orders you intend to cancel in order to move the price). Trading on behalf of a company also brings internal authority limits. Know the rules that apply to you before you place an order.",
          "Most new traders fail from position size and discipline, not from a lack of ideas."
        ] }
      ],
      quiz: [
        { q: "With $100,000 of capital, 1% risk, and a stop that would cost $800 per contract, the correct size is:", options: ["1 contract", "2 contracts", "5 contracts", "8 contracts"], a: 0, why: "Risk budget is $1,000. 1,000 ÷ 800 = 1.25, rounded down to 1." },
        { q: "A position worth $500,000 has daily volatility of 1.5%. Its 1-day 95% VaR is roughly:", options: ["$7,500", "$12,400", "$25,000", "$75,000"], a: 1, why: "1.65 × 500,000 × 0.015 ≈ $12,375." },
        { q: "LME stocks are falling quickly. A calendar spread trader would expect:", options: ["The contango to widen", "The nearby to strengthen against the deferred", "No change in spreads", "Volatility to fall"], a: 1, why: "Lower inventory raises the convenience yield, tightening spreads toward backwardation." }
      ],
      practice: ["Write a one-page trading plan: markets, instruments, maximum risk per trade and per day, and the conditions under which you stop.", "Paper-trade one idea a week for a month using the journal format above. Size each one with the position calculator."],
      tools: ["position"] },

    { id: "m12", title: "Capstone: a hedging and trading plan for metals", hours: 6, goal: "Put the course to work on a real book.",
      lessons: [
        { id: "m12l1", title: "Map the exposure", body: [
          "Start with the physical business, not the market. For each metal, list what you own, what you have bought but not received, and what you have sold but not delivered, with tonnage and pricing basis for each.",
          { list: ["Fixed-price purchases not yet sold: long.", "Fixed-price sales not yet bought: short.", "Formula-priced deals: exposed only between the two pricing periods.", "Inventory: long at its replacement value, not at what you paid."] },
          "Net the longs and shorts by metal and by month. What remains is the position to manage."
        ] },
        { id: "m12l2", title: "Choose instruments and write the policy", body: [
          "Match each exposure to an instrument using Modules 4, 8 and 9: futures or swaps for firm tonnage, options for uncertain volume, and nothing at all where the hedge would add more basis risk than it removes.",
          "For each hedge record the hedge ratio, the expected basis risk, the margin it could require in a bad month, and who approved it.",
          "The policy should fit on two pages and be agreed before any trade. Its job is to stop a hedging programme from drifting into speculation."
        ] },
        { id: "m12l3", title: "The path to trading", body: [
          "The usual route into metals trading is through the physical side: logistics, pricing and hedge execution first, a risk-taking book later. Understanding how metal moves and prices is the edge that outsiders lack.",
          { list: ["Months 1–3: finish this course and the CME material. Rebuild every worked example yourself.", "Months 3–6: paper-trade spreads and simple hedges with a journal. Follow one metal closely every day.", "Months 6–12: take responsibility for pricing and hedging real physical deals at small size, under a written policy.", "Beyond: add options, then discretionary positions within strict limits."] },
          "Read widely, keep records, and judge yourself on process for the first year, not on profit."
        ] }
      ],
      quiz: [
        { q: "You hold 300 tonnes of unsold aluminium and have a fixed-price sale of 120 tonnes not yet covered by a purchase. Your net position is:", options: ["Long 420 tonnes", "Long 180 tonnes", "Short 120 tonnes", "Flat"], a: 1, why: "Inventory is long 300; an uncovered fixed-price sale is short 120. Net long 180." },
        { q: "The main purpose of a written hedging policy is to:", options: ["Maximise trading profit", "Keep hedging from drifting into speculation", "Avoid margin calls", "Satisfy the exchange"], a: 1, why: "It fixes in advance what is hedged, how much, with what and by whom." },
        { q: "Inventory should be measured for hedging at:", options: ["Its original purchase cost", "Its current replacement value", "Its expected selling price", "Zero until sold"], a: 1, why: "Price risk is on what the metal is worth now. What you paid is history." }
      ],
      practice: ["Capstone: build the exposure map for one metal at your company and draft a two-page hedging policy for it.", "Write your own twelve-month plan using the path above, with a specific goal for each quarter."] }
  ]
};
