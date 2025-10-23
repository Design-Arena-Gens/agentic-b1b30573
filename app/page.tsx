import Link from 'next/link';

const entryRange = '₹82 – ₹88';
const targetRange = '₹100 – ₹105';
const stopLoss = '₹72';

export default function Page() {
  return (
    <main>
      <section className="hero">
        <span className="badge">Educational Thesis · May 2025</span>
        <h1>NHPC Ltd. — Sub-₹100 Multibagger Candidate (1–2 Year Horizon)</h1>
        <p>
          NHPC Ltd. is India&apos;s largest hydroelectric PSU with a 100% clean-energy
          portfolio. Based on recent brokerage coverage and government-backed growth
          plans, it screens as a high-quality stock trading below ₹100 with room to
          revisit triple-digit levels. All figures below reflect public information and
          analyst commentary available at the end of May 2025.
        </p>
      </section>

      <section>
        <h2>Action Levels &amp; Timeframe</h2>
        <table className="levels-table">
          <thead>
            <tr>
              <th>Setup Component</th>
              <th>Suggested Levels</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="pill buy">Entry</span>
              </td>
              <td>{entryRange}</td>
              <td>
                Aligned with NHPC&apos;s market price of ₹86.6 cited by JM Financial on 27
                May 2025, leaving buffer to accumulate on dips.
              </td>
            </tr>
            <tr>
              <td>
                <span className="pill target">Target</span>
              </td>
              <td>{targetRange}</td>
              <td>
                JM Financial&apos;s 12-month target of ₹100 with upside extension to ₹105 on
                successful hydro and pumped-storage additions.
              </td>
            </tr>
            <tr>
              <td>
                <span className="pill sl">Stop Loss</span>
              </td>
              <td>{stopLoss}</td>
              <td>
                Risk cap roughly 15% beneath the lower entry band, just below pre-2024
                consolidation support to avoid deep drawdowns.
              </td>
            </tr>
            <tr>
              <td>Holding Horizon</td>
              <td>12 – 24 months</td>
              <td>
                Allows time for upcoming hydro capacity commissioning (FY26–27) to be
                reflected in earnings.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Why NHPC Fits the Sub-₹100 Multibagger Theme</h2>
        <div className="grid columns-2">
          <article className="card">
            <h3>Brokerage-Endorsed Upside</h3>
            <p>
              JM Financial reiterated a <strong>“Buy”</strong> with a ₹100 target while
              NHPC traded at ₹86.6, emphasizing a sound order book and margin profile
              (<Link href="https://m.economictimes.com/markets/stocks/recos/buy-nhpc-ltd-target-price-rs-100-jm-financial/articleshow/111663552.cms" target="_blank">Economic Times, 27 May 2025</Link>).
            </p>
          </article>

          <article className="card">
            <h3>Clean-Energy Growth Pipeline</h3>
            <p>
              NHPC&apos;s FY26–27 expansion plans add significant hydro and pumped-storage
              capacity, riding India&apos;s target of 50% renewable energy by 2030.
            </p>
          </article>

          <article className="card">
            <h3>Financial Resilience</h3>
            <p>
              Q4 FY25 results reported consolidated income of ₹2,672 crore (+15% YoY)
              and net profit of ₹919 crore, supporting stable dividends and reinvestment
              capacity (<Link href="https://m.economictimes.com/markets/stocks/recos/buy-nhpc-ltd-target-price-rs-100-jm-financial/articleshow/111663552.cms" target="_blank">Economic Times</Link>).
            </p>
          </article>

          <article className="card">
            <h3>Valuation Snapshot</h3>
            <p>
              Tickertape lists NHPC at ₹84.97 with a trailing P/E of 28.3 and 1Y drawdown
              of 16% (updated 3 Apr 2025), implying re-rating potential if growth resumes
              (<Link href="https://www.tickertape.in/stocks/collections/stocks-under-100" target="_blank">Tickertape Stocks Under ₹100</Link>).
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Risk Controls &amp; Trade Management</h2>
        <ul>
          <li>
            <strong>Position sizing:</strong> Limit exposure to 5–7% of total equity
            allocation and redeploy only after clear trend confirmation above ₹90.
          </li>
          <li>
            <strong>Event risks:</strong> Monitor monsoon season hydrology, tariff
            revisions, and environmental clearances which can delay project rollouts.
          </li>
          <li>
            <strong>Stop-loss discipline:</strong> If ₹72 is violated on weekly closing
            basis, exit to preserve capital and reassess fundamentals.
          </li>
          <li>
            <strong>Trigger-based scaling:</strong> Consider booking partial profits near
            ₹100 and trail the stop to ₹86 to capture follow-through moves.
          </li>
        </ul>
      </section>

      <section>
        <h2>Supporting Sources</h2>
        <div className="sources">
          <p>
            • <Link href="https://m.economictimes.com/markets/stocks/recos/buy-nhpc-ltd-target-price-rs-100-jm-financial/articleshow/111663552.cms" target="_blank">JM Financial reiterates Buy on NHPC, target ₹100 (Economic Times, 27 May 2025)</Link>
          </p>
          <p>
            • <Link href="https://www.tickertape.in/stocks/collections/stocks-under-100" target="_blank">Tickertape collection: Stocks under ₹100 with valuation metrics (refreshed 3 Apr 2025)</Link>
          </p>
          <p>
            • <Link href="https://enrichmoney.in/blog-article/stocks-under-100-rupees" target="_blank">Enrich Money spotlight on NHPC&apos;s sub-₹100 performance (2024 overview)</Link>
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <strong>Disclaimer</strong>
        <p>
          This page is for educational purposes only and does not constitute investment
          advice or a solicitation to buy/sell securities. Market data and analyst views
          cited above are sourced from publicly available articles dated April–May 2025
          and may change without notice. Always verify live prices, consult a qualified
          financial adviser, and evaluate your personal risk tolerance before acting.
        </p>
      </section>
    </main>
  );
}
