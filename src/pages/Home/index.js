import "./styles.css";
import { ReactComponent as LogoSvg } from "../../assets/PigzLogo.svg";
import { ReactComponent as IconPigz } from "../../assets/icon-pigz.svg";
import { ReactComponent as Storefront } from "../../assets/storefront.svg";
import { ReactComponent as Smartphoneblack } from "../../assets/smartphone_black.svg";
import { ReactComponent as Grupo35 } from "../../assets/grupo35.svg";
import { ReactComponent as Printblack } from "../../assets/print_black.svg";
export function Home() {
  return (
    <div className="home">
      <header className="header">
        <LogoSvg />
        <button className="btn-login">Já sou parceiro</button>
      </header>
      <section className="banner">
        <h1>
          Pigz: tudo que <br /> você precisa <br /> pra vender <br /> ainda
          mais!
        </h1>
        <p className="banner-p">
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja prontinha para iniciar as vendas.
        </p>
        <form id="my-form" action="">
          <fieldset>
            <legend>Quero vender no Pigz</legend>
            <p className="form-subtitle">
              Dê o primeiro passo para aumentar suas vendas
            </p>
            <div className="fildset-wrapper">
              <div className="input-wrapper">
                <label htmlFor="form-name">Nome</label>
                <input
                  type="text"
                  id="form-name"
                  placeholder="Leonercio Goesfeeld"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="form-email">E-mail</label>
                <input
                  type="email"
                  id="form-email"
                  placeholder="leonercio.goesfeeld@email.com"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="form-tel">Telefone</label>
                <input
                  type="text"
                  id="form-tel"
                  placeholder="(95) 99876-5432"
                />
              </div>
            </div>
            <p className="form-footer">
              Ao continuar, aceito que a Pigz entre em contato comigo por
              telefone, e-mail ou WhatsApp.
            </p>
            <button type="button" className="form-btn">
              Continuar
            </button>
          </fieldset>
          <fieldset hidden>
            <legend>Onde fica sua loja</legend>

            <div className="fildset-wrapper">
              <div className="input-wrapper">
                <label htmlFor="form-name">CEP</label>
                <input type="text" id="form-name" placeholder="00000-00" />
              </div>
              <div className="col-2">
                <div className="input-wrapper">
                  <label htmlFor="form-name">Estado</label>
                  <input type="text" id="form-name" placeholder="UF" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="form-name">Cidade</label>
                  <input type="text" id="form-name" placeholder="Selecione" />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="form-name">Endereço</label>
                <input
                  type="text"
                  id="form-name"
                  placeholder="Avenida Brasil"
                />
              </div>
              <div className="col-2">
                <div className="input-wrapper">
                  <label htmlFor="form-name">Número</label>
                  <input type="number" id="form-name" placeholder="123" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="form-name">Complemento</label>
                  <input type="text" id="form-name" placeholder="Sala 1" />
                </div>
              </div>
            </div>
            <button type="button" className="form-btn mrg-top-30">
              Próximo
            </button>
          </fieldset>
          <fieldset hidden>
            <legend className="">Me conta um pouco sobre a sua loja</legend>
            <div className="fildset-wrapper">
              <div className="input-wrapper mrg-top-30">
                <label htmlFor="form-company-name">Nome da loja</label>
                <input
                  type="text"
                  id="form-company-name"
                  placeholder="Restaurante Todo Mundo Gosta"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="form-cnpj">CNPJ da loja</label>
                <input
                  type="text"
                  id="form-cnpj"
                  placeholder="12.345.678/0001-99"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="form-departments">Tipo de loja</label>
                <input
                  type="text"
                  id="form-departments"
                  placeholder="Selecione"
                />
              </div>
            </div>
            <button type="submit" className="form-btn mrg-top-80">
              Concluir
            </button>
          </fieldset>
        </form>
      </section>
      <IconPigz className="img-icon" />
      <main>
        <section>
          <h2 className="title-section pdng-left-right-64 mrg-bottom-40">
            Você tem um novo Pigzdido!
          </h2>
          <div className="box">
            <div className="box-wrapper">
              <Storefront />
              <p className="box-title">Marketplace</p>
              <p className="box-subtitle">Pra sua loja vender mais</p>
            </div>
            <div className="box-wrapper">
              <Smartphoneblack />
              <p className="box-title">É fácil e rápido</p>
              <p className="box-subtitle">Fazer um pedido no Pigz</p>
            </div>
            <div className="box-wrapper">
              <Grupo35 />
              <p className="box-title">Pigz Gestão</p>
              <p className="box-subtitle">Você no controle, sempre</p>
            </div>
            <div className="box-wrapper">
              <Printblack />
              <p className="box-title">Vias de impressão</p>
              <p className="box-subtitle">Personalizáveis</p>
            </div>
          </div>
        </section>
        <section className="mrg-top-80">
          <h2 className="title-section pdng-left-right-40">
            Tudo que você precisa por apenas R$199/mês
          </h2>
          <p className="section-subtitle pdng-left-right-64 secttion-subtitle-margin">
            Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
            por cada venda, sem letrinhas miúdas.
          </p>
          <div className="slide">
            <div>
              <div className="slide-btn-wrapper">
                <button className="slide-btn slide-btn-ative" />
                <button className="slide-btn" />
                <button className="slide-btn" />
                <button className="slide-btn" />
              </div>
              <p className="slide-title">Pigz Marketplace</p>
              <div className="slide-box">
                <p className="slide-subtitle">
                  Além de uma página exclusiva, com o Pigz Marketplace sua loja
                  terá mais visibilidade, no app e no site. Uma vitrine com
                  milhares de clientes todos os dias, pra vender muito mais.
                </p>
                <img
                  src="./images/phonepigz.png"
                  alt="Celular acessando a pigz"
                  width="100%"
                  className="slide-img"
                />
              </div>
            </div>
            <div hidden>
              <div className="slide-btn-wrapper">
                <button className="slide-btn slide-btn-ative" />
                <button className="slide-btn" />
                <button className="slide-btn" />
                <button className="slide-btn" />
              </div>
              <p className="slide-title">Pigz Gestão</p>
              <div className="slide-box">
                <p className="slide-subtitle">
                  Acompanhe suas vendas em tempo real, no computador ou no
                  celular, de onde estiver. Faça alterações de preços e
                  disponibilidade de produtos rapidamente, como deve ser.
                </p>
                <img
                  src="./images/gestaopigz.png"
                  alt="Celular acessando a pigz"
                  width="100%"
                  className="slide-img"
                />
              </div>
            </div>
            <div hidden>
              <div className="slide-btn-wrapper">
                <button className="slide-btn slide-btn-ative" />
                <button className="slide-btn" />
                <button className="slide-btn" />
                <button className="slide-btn" />
              </div>
              <p className="slide-title">Gestão de entregadores</p>
              <div className="slide-box">
                <p className="slide-subtitle">
                  A ferramenta ideal pra quem tem entrega própria. Controle de
                  entregas por motoboy, geração de relatórios por entregas e por
                  taxas de entrega, individualmente.
                </p>
                <img
                  src="./images/entregadorpigz.png"
                  alt="Celular acessando a pigz"
                  width="100%"
                  className="slide-img"
                />
              </div>
            </div>
            <div hidden>
              <div className="slide-btn-wrapper">
                <button className="slide-btn slide-btn-ative" />
                <button className="slide-btn" />
                <button className="slide-btn" />
                <button className="slide-btn" />
              </div>
              <p className="slide-title">Pagamento on-line</p>
              <div className="slide-box">
                <p className="slide-subtitle">
                  Segurança e agilidade para receber e entregar pedidos. Seus
                  clientes pagam com Pix ou cartão de crédito pelo app, e o
                  entregador nem precisa levar a maquininha de cartão.
                </p>
                <img
                  src="./images/pagecompigz.png"
                  alt="Celular acessando a pigz"
                  width="100%"
                  className="slide-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mrg-top-80">
          <h2 className="title-section pdng-left-right-40">
            E mais: suporte que realmente funciona!
          </h2>
          <p className="section-subtitle pdng-left-right-64 secttion-subtitle-margin">
            Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
            disponível pra ajudar você e seus clientes.
          </p>
          <div className="card-wrapper">
            <div className="card">
              <p className="card-title">Pigz</p>
              <p className="card-subtitle">Tudo o que você precisa</p>
              <ul>
                <li>Pigz Marketplace</li>
                <li>Página exclusiva</li>
                <li>Pigz Gestão Desktop e Mobile</li>
                <li>Gestão de entregadores</li>
                <li>Vias de impressão personalizáveis</li>
              </ul>
              <p className="card-price">R$199/mês</p>
              <button className="card-btn">Vender no Pigz agora</button>
            </div>
            <div className="card">
              <p className="card-title">Pagamento On-line</p>
              <p className="card-subtitle">Segurança e agilidade</p>
              <ul>
                <li>Aceite Pix e Cartão de Crédito</li>
                <li>Antecipação Pix automática</li>
                <li>Não dependa de maquininha de cartão</li>
                <li>Segurança para receber pedidos</li>
                <li>Agilidade para entregar</li>
              </ul>
              <p className="card-price">2,99% por transação</p>
              <button className="card-btn">Saiba mais</button>
            </div>
          </div>
        </section>
        <div className="footer-line">
          <p>Fale com a Pigz</p>
          <img src="./images/whatsapp.png" alt="Icone do WhatsApp" />
          <p>
            <span>95</span> 3224-2603
          </p>
        </div>
      </main>
      <footer>
        <img src="./images/pigz-logo.png" width={80} alt="Logo da Pigz" />
        <p className="footer-legend mrg-bottom-24">Tudo que você precisa.</p>
        <p className="footer-title mrg-bottom-16">Baixe o APP</p>
        <img
          src="./images/selo-app-store.png"
          height={30}
          alt="Selo App Store"
        />
        <img
          src="./images/selo-google-play.png"
          height={30}
          alt="Selo Google Play"
        />
        <p className="footer-title mrg-top-64 mrg-bottom-24">Pigz</p>
        <ul>
          <li>
            <a href="/">Sobre o Pigz</a>
          </li>
          <li>
            <a href="/">Portal do Parceiro</a>
          </li>
          <li>
            <a href="/">Quero ser um Pigz Partner</a>
          </li>
        </ul>
        <p className="footer-title display-flex gap-16 mrg-top-64 mrg-bottom-24">
          <img
            src="./images/icone-fale-conosco.png"
            width={24}
            alt="Icone de Headset"
          />{" "}
          Fale conosco
        </p>
        <p className="mrg-bottom-24">falecom@pigz.com.br</p>
        <p className="mrg-bottom-24">(95) 3224-2603</p>
        <p className="footer-title mrg-bottom-16">Pigz nas redes</p>
        <div className="display-flex gap-16">
          <img
            src="./images/linkedin-with-circle.png"
            alt="Acesse o Linkedin"
            width={25}
          />
          <img
            src="./images/instagram-with-circle.png"
            alt="Acesse o Instagram"
            width={25}
          />
          <img
            src="./images/facebook-with-circle.png"
            alt="Acesse o Facebook"
            width={25}
          />
          <img
            src="./images/youtube-with-circle.png"
            width={25}
            alt="Acesse o Youtube"
          />
        </div>
        <div className="divider mrg-top-64 mrg-bottom-16" />
        <div className="display-flex gap-16 mrg-bottom-24">
          <a href="/">Nossos termos</a>
          <a href="/">Privacidade</a>
          <a href="/">Ajuda</a>
        </div>
        <div className="copyright-wrapper mrg-bottom-24">
          <p className="txt-copyright">
            © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs
            Tecnologia LTDA. CNPJ 34.895.008/0001-85
          </p>
          <img
            src="./images/logo-orange-horizontal-branco.png"
            height={20}
            alt="Logo da Orange"
          />
        </div>
      </footer>
      <div className="divider-footer" />
    </div>
  );
}
