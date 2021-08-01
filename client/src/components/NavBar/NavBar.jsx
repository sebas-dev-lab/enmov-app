import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;
  return (
    <div className="navbar">
      <div className="topIcon navbar--topleft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="navbar--topcenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topList--item">HOME</li>
          </Link>
          <Link to="/about" className="link">
            <li className="topList--item">ABOUT</li>
          </Link>
          <Link to="/contact" className="link">
            <li className="topList--item">CONTACT</li>
          </Link>
          <Link to="/write" className="link">
            <li className="topList--item">WRITE</li>
          </Link>
          <Link to="" className="link">
            {user && <li className="topList--item">LOGOUT</li>}
          </Link>
        </ul>
      </div>
      <div className="navbar--topright">
        {user ? (
          <img
            className="topImg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUBAQH///8AAAD8/PwFBQXw8PDt7e309PT39/e/v7/e3t7k5OTQ0NCzs7ONjY1VVVUrKyuqqqrU1NQiIiJPT0+9vb01NTV6enpCQkLo6OiBgYGhoaGVlZViYmKvr69vb2+bm5sRERFISEhaWlrIyMh8fHwaGho9PT1oaGgtLS1ycnIkJCQcHBwWuvQ9AAATeElEQVR4nN1dCVfiMBBuJ+WQGxSVWxDFVf//79skbY6ZNKXFBqnz9u3btULzde4jaRRfRiyOBxtIILoKQTLqy3teQNGlCIePAElyHYBRAgCb2WUrvQAh489y+w2CfddCCBGHCOPBJXy8hIdsKu53JQG1YAIcLsBYFSH//uH99dFpjK+9iguuzsMj17/olxBKjLu21JMQCMXX9sbcvvwWPEnc6Iy6VVhSCSFb/ooCIhIL2M8rsLGKlM7htxkoKeFsfCivjmURsrg//k0FtEkK0pqxcnwszcMVXC2COU98KTApGQGUQcifVf/51xUQkRAnWDJWwuaUQhhzF3+1+KU0cTb2SgQA5xGyuHMzGoiJS9XLeaNagofHW9JARHxdh/Y5Lp5DyOLRTbgIHwEcz7CxGCGLWw/Cbv02Di+JxY2KIZ7h4eyKSeCFlMC40KIWIORPZntbPiKX+Aq/+gXKWMjD5a2aGJsgVcbqCBnrvN4+AyUJQVvFPlH1I2yfbtrGYEq4vamGsBv3901BJ0hUqjyqmI+QCSN6i2GMl7i8PXRz7U0eQm5EBzft5vMJTq08iLkIZa7bJA4K4ly8b5fiIZMAGyWiKSUSosPFHISSg7+93EuIsyUHYo6Uznmg1kiEwmm8O7pIETKRLDWThZHUxUnrDEJpRRuLUOjiiTgNjJDFvQZzUBDXxQdWgDBe7JsQbBdSAh+oemMjZHF30mwOSgJY+hDG7KHx8ATAhGcaeQi59D79AYCRDMPvDBdtHq7+gIhK4jh62txYCI+NNzKG4KvjIlz8FQ5G0me8KoOqEDL2+IcQiuBmTRDGb39IRiOpikcspQ0Ot3NJhGZphBqlItpveLDmkihrSDnNePjcPBk9t94kc/yRjNbWDeTgWa0SXpFjkzycNQ5gOhNSvGgulo9MIpSO4korq4eAJxD74fLcovkjWKdSum4YQMHCJ8aDzBK/14ujNOm9wqpqo7RNweJhGYTPAuFzs4q/osgyT2ueZX53GsXTG++BShy2lKnG9rGM5HHudS6r/l5NrgXL0nAku6VI/uLMA5T4OETLSwBepSausMHX4XSvYQJsTTJU4luSqGowI/3QVWyTAPhvdJf2Ijqz9ZeoT1iNwlbJRVQKuLOHut8NB6ExivssezJoznLZdPj6QU9edEsuodJKxS0OL2Jkrh0WoZw+7MSEFs8AVntpX+saUuZNnu46MpCNO6ERbtxmIP//s1ViimudN5ebAabW2CoLqIpC018o/zRIQ4/1svCui2/wHhIhDMuMOdda3ZXyj+45CYVQWEwPBwkzN/VKaZ/c4hAOIWxKcLA1fahVUUSQjukjFMAE7rtnAfZ2wjLUWpeAAblHqA4AX/agGCCLW7ssvqn1xnNyn7P5Z9GXWeRe+zwzE8vu5MBk3U9YR4OKRhffQYZ9H6u7u9XGFTRAPj2XWmG2taCGlaASGbbvqwBeM7vVd62FKDycoXEQI+fcePoDhJkzEMJIS+0AHVtGpUZStbxcfAqXtSQIS9QQPN8k3LkBsMMMwf1b/u/2bEF5OA3Dww9ym1IZds73JMRmdfZ2EQXA3gnD4u6nlRAqKpcYVl7ZK7lNyQyb2EywOag4Yn9gYl9iQuWywq5FZdOmiggfCMJeqQSbL+/+eWL2vCWySobJNjZkEHYoKqNCftBnWJAOBDxWFxWRbg0XLGaLVQoRqJpJGplvAhJYnLIyVAt/YhIE4TdZV4kaAkgDLBG1ZckycSQhlQYLIcKSdRvIoLqof4ZACHhZrOsXFciePFc5Td2DEDho54Ur76A/+IhYPM+w218kEAYZigHAs/CMZ9j5vxilMSOHM7U8GWvtQYR+eQhVEM8/s0MXtuoCyqZYvWmTQYh1gcX57Rxh+u5FAYXYFDnzOMoDaJfnSVyxVTwk4cZnGB5Sx3vAnlq5hoeXgSwvUJvCZevdkzOYuh1xfVpK3/AHggQ1boK4sQvtScq8p7S6KTrKYxpssRlNwBT1DUK89+WoEJJwYx0GIV3fzvJiplDFsvLCxMli+f/zWcg6yiPSmyifyx8Xosuj/gKAieoWaHoDywSOjrYh+nSLHkVkPDgRFMVceMYf2AbplmGLHduOGui1pZMvF9O3B6GKKmi4cRcmbJuSZb1Yfpokj8vXgjS9vxqtiAT/01Er3oGuogr4xr9/DMNDWuGzImZqzbctX6WFMZEsYMvBjFkmqtDdK/3EBf5SUX91hHRzmJUg+jeOUXzsGaTdxZUKlbQnRNzZvUKInXE/DMJPstw7C+FTSYTCAIPrenRQQ1Xhn0KInXHZvlpFhCSF4X7avlaOhtlOB+L3dGWSqsJBIcRPJBDCMUFoJYjUX0kSqki0UTk+mufrGIWK+6tCiC0QC4Pwkax3YXmLUw5CnjLRuuAQVNqB9U17cCruKgCl+3zfgyB8p+u3EH6Ra6JvOzwBvOITVo7aomD3oktLomNhX3hTPCThRq19NY2QJIi2qLjXWPdDhnIvaMVZiC2b8TgPVF9EHOlIISQhRaAUmPq4vcVEx/1txGEoQJRXZ/NEGo/alh4wwpVCSEKKcRiEtK3+ZSGkGrfKhgdPaMU6CiOGeaa/6B9GqKIKGlLswiCkKE56XREJtJma+8fFQdP8J7zVHhzesTCoqILa2J+0hQog0gTREhVizY0Lj3AWrC0NNr7aaNFaiYoqaLgRqK5Pz2WyeqQ4rzPFMLpitcefG18buuEtUQUVVXAbiygQD+nZE1aPlFrzjWfFX+rne/RjZhBiVegpvT1QhEEU0U0QzbUtthBPesVYQU/65/irEs/vLxRCEm58XDtBdLqLS200sfIePNI70T9Hv890gniPEYYZk3B6pHaCiD27KRWRwsvGI40GOVZo1YOhFXdPrfanCCskiFOVhHuSCJoOvXpS4Dg/yQ80cpaTIJqwjUTMQ206sPKuNUJsmLVZpsquUmBcqBkEAehYbKuQ6ySIOjsmyvuiEWLevuWnwEyF2KijU2pK/yKENAm0e0akfzrQUorDLR2FeRJEEoCyjLmAMmNmhLpmhKRoaVdL6LWeRogVdO6RxpVGSMYFpnKQQTgRo4gsTA9YRsWImFVLgAmOztoaCVZe3fx3EkT1cyIorXTmGuO+eEjiHEKSAtuPEvbYv3XUpDtRXq26Xt7SPExOPr/ixC1Ic03cPKFJoOmR0uhMz9eSpq9JEDFXjiZso/H9fPN5h51tsD0+DgpTjHd7bxqhL4nA0mtKvHSSgem/9A8+Q22FcDuIjxZC0onRSQRWXpNEYOk1vM02flKM1n97gTjoorDb6dSDqwliICmtSSKw9PbB7IjJbfVbX/EQbptWQY/U6S76EkQl2DhIYSYMcyegCK1CzpfjOIRZ7XSn3LdRuQVRXiXYpP7YNYen0VSQ0Czkfp2CIVqn3Pep0yesvDpB3OPf3xtFdJrNmrjPaIc8D9eVnzWYzJUkj0uP9R9r3mLp/acRRq6t0QjjVtjzc3ISRNOeJi0VvfGWcCRLIvgHcb/MpLSQOLN9GT4W97/CbqrPSRAT3zUThvm6TDgFtmJpyB8CkFsqA28no1MtVgcRaII411KKFdR0mfI7iOlnJs6eruy1BWE3u4LTJSzoIKrsOPEkiFR68d4G+FrQQIYN34Pv6gRniNZOEElOYEJsrKBGerF7wSXexLZcAmln+g/CH03iFC2LE0RlNGmXKb+88YJ5yD/3rY3tYvjh2ZtRO0TaJbR2WcI9vqTbp1x58zqItJtEJv+1V2Qxl0641jGAkBArbpW8aInXJBFYQWcaIS5vDG0EYEWB7SuxL1sVncWzE0R8SRc6SUew7ylXHBFCeRpZ+rHRNY9DcMatUYJIkkedPuE6oC5iE/di1we5SJrJzdOV2JetiiaIJwsh8dKqKk2q1V1LenGP1Hb5Vl/1W6Vh4q8oO2AhCpYC0/TJThDJNZ1EAFbecz1S6Sqs7zqYyUxEQUA6aa49REuvmU4EVlAdq3vKG2SMgfWeFab7583yZTifz7cvT6e0h143SPf0enuIllwzPRhPl2mCgxZjLtHeLv6vdm82m/UWWM9b840MAWrGWLTL0k0Q1XpxiK2T/3eMcG+EkaYwHuo91C+qTo/UmreumCBGZBeelSA6Mx/5xEQgVLuY0h6p3UEkT/5cl8nLW2cbYAHGbd3porPLsrCDqFbs6zJh9/Kqf+4tYjgImb1lqh6E9PHaCSLpLpoEMT+JcEdMM78H3fOHKRg61YxwR77fThBJd/F8B5EmiJmlufdVaXLpWC8TnR5pwYipBu/tMnl4SzpcxcRqnlKsliCqC1hBDW/zE0TYV+Ehq9meOrss7RFT8uwXysw5SYT6BJZePYVYTQ/N0F89COkQrV2M3+OFtXQ8iZVXh9ikvKHNshMaFlO95+QUD9Hi6KyrEeLqjukyUek1ZY9KVKs1dTuINkISiqhRbKK8JvnH0jswUZuz/76QNnWW4OjNmbXl2FnYRK04PwWm0qtLV67FLqaLzpvzI6QdxGejhzRBVMk5ToFN85+4F1O6SmDHKrwqtt5BTH8HERwLMdZihxerk39fB1F4/W35N/7WipDGIWKTj+lckHjyQyPsoo/o5B/z1k4QhWUej9ZpM5h1+Z9Wb3acr9ZPu+V0RvhbMw+LEkRyzQzpecYQ8VsZ7JMVEnkWw5RlUwpvuH6xwyHBrl5vcUGCSKfcTRKBeWttg5EF4FmcHdzylI39q3QXhmiLeL17850E0Rqhowmi6cFgBd1phFZtkgM52Z4HvvtqzmRNc0BSY/6qF6E/QXQ89VYbR6ygI62fi4wLkgY6hBYc3OsjBd0NsTgCrvf8Rjf/xnsQkX7orRIkiVhrhNow96ebBHHwXQ/qdZ2j/UiTr970yemDFieICglu/5sxRMlbdnx7VHqmEfZiZWVWjoyiTeUit6j30Da6y9IqVdME0YTYWEFNiD2Ie6sxOaFH+go9x8acswshQoed+c6uuBwhHZMoSBDVpYQor0kQH+TRuem5NTYE07RgjpaJFznivWL1Nm7IRi10DI+bICoptZWXWedLpWVrB8LEOhClD/gaedERq3trCdA+qL0hlyaP50LsKL8riGpzbGHpufhAMscRTe0bgmmaa59JRcdPzZCe3BeaHorROS7PFFaQmFihvTxaZITPpa2/mugmgWwP3mu6B6MSxMyuFCoOPgqMpWNsKR22HfmcLIy1H2sG7h7EggRRJxGiy9Sef+4BewXPLdAdWNzffYm209vcPU2RBTheMO+cVu+1k7I0k9n6AOXaYc6eaaF1HfpGQ0WOs/w5wMRJEO1pLXJNb8CsMGoAOTv7nTlo9eNBiBa/01T4sHhIOog7gzAqW2jIQ+ijXpBBTCdBfNP3sE7tkA+8f1Fa45RkPcTiXhJkSKogQbQn2Lhd+b7MCOTse88HeAw0RVSYIKYlXjZby9Z7dJGSlD1+aQVh3soBBcfwyJcWLKYfSUmz6bvFNseqUAZ2Ps66nQvJTRCtN6HAZj2RHj35yZCEc4RKDs0DDns7uyztc1ppHnTRDbiYFtRKxaXeOOScm1OPtlo/tdwWEicHxdT7lMcw/fxOvgVYW13ko659iw7gAyXN3STuwSb0oKJKAtMltOe7Wl8xkd5COta8vU/91b/gg5gg53zSE6gH68cgtxNu7qmFoHHqDtandJL2gm+s8rvZHF5v+hpyrpVj3N2pTIW1B9u300/uVsVvCoTdu2XKPPk4g2BMpE+9P4xfX8eP78pCX3yrKgG6yEMV84KqO6boZ+69WlU8ScEFH9zVrrUGJ7ut9OlrziTXQ0l03Unq6xNEPCy56Vfn/Yi4dzlEf+aN6nnELcYgyuvv/BUCsWVH9JrDHFr7+8RN8L4r3yUbfzbvfcclSNRx7uL0bbndet9CdyOUdeKiLJH9gwij9NVY6ZvHxQaqP4ZRyKickYiyfK9pr3U+S/L9dEwjlC3bv8VFveVVTyYN/xZCzrAOQWidk998EgI5yAoEGqE8TPy3V1YXgTzf10HYSQKXea5FIF/noko8RkqZejVP44nDOJlDqK0ZSGYfdNFkEu8kMvVIe8pTDAI2MIsnJGoePaveihDKGLzhTkMU6o6xB6GgTcPdIkT0hUMYIZPv1mo0iTk65kcohuYfG8xFoWN0z42DMG5PGgwxISeN5CDktPhuKkTOQfdtKS5CFi/eG+n6cShTxMM4bn810PULHaRNeB9CxlqT4Icy1U0A9LSfIh7GcefUMC7mWdFChIwFnXioncRiPadN+BCKobzmBHCiNZ5/Up8XYTZi3BCE9sFSVRDG1VqLv0gJfPW8UzhehIIGTYAoVPCBnmBVDiFPphaPty+p6SYM/xxVIQ85yt2FY5TXIlFb2hZuGy5GyJh6r9Ftkljavle8L/oMDznNvm/WbQgnsTk3rHkeIet83CgXC9x8JYSxdBs3qIycgY9+J1EFobCpDyGOR/sRCQbmvgX7Eh6Kr1mFOB7tchImdFLuFJRSUiqof7gdZZQ7EUa+d0RfiJCJs8NuBKLA99zL2yr0E4TyvPDPW7A4IA9cKIuvCkLBxtnz7/ORr+CpU+HwkwoIJW2/fxkjwLjaOUvVEPIn113/aGD3Z+A4/burwL/qCCV1lvAb+igN6D3dWhYEIYvbb9cXVRFxvE9LeogfIhTUGu2vykZxZM1jdf4J+g9GDdJCjiiWBAAAAABJRU5ErkJggg=="
            alt="topImg"
          />
        ) : (
          <ul className="topList">
            <Link to="/signin" className="link">
              <li className="topList--item">LOGIN</li>
            </Link>
            <Link to="/signup" className="link">
              <li className="topList--item">REGISTER</li>
            </Link>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
