import React from 'react';

const CorporatePage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Корпоративная информация</h1>

      <section className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">О нас</h2>
        <p className="text-gray-600 mb-4">
          Мы, как ведущая компания в своей области, стремимся предоставлять услуги и продукты высокого качества. Наша миссия — предлагать отличные решения, демонстрируя приверженность качеству и инновациям.
        </p>
      </section>

      <section className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Программа устойчивого развития</h2>
        <p className="text-gray-600 mb-4">
          Наша компания привержена экологической устойчивости и снижению выбросов углерода. Мы применяем зелёные методы в наших операциях и поддерживаем инициативы, способствующие здоровой планете.
        </p>
      </section>

      <section className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Наши партнёры</h2>
        <p className="text-gray-600 mb-4">
          Мы сотрудничаем с ведущими компаниями и организациями, чтобы улучшить наши услуги и обеспечить большую ценность для клиентов. Наши стратегические партнёрства помогают нам оставаться на передовой инноваций и совершенства.
        </p>
      </section>

      <section className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Контакты</h2>
        <p className="text-gray-600 mb-4">
          Если у вас есть вопросы или вам нужна дополнительная информация, свяжитесь с нами. Наша специальная команда всегда готова помочь вам.
        </p>
        <a href="mailto:iletisim@firma.com" className="text-blue-600 hover:underline">
          elaqe@gmial.com
        </a>
      </section>
    </div>
  );
};

export default CorporatePage;
