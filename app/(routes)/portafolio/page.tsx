"use client";

import { motion } from "framer-motion";
import ContainerPage from "@/components/container";
import GraficoEjemplo from "@/components/graficos";
import TransitionPage from "@/components/transition-page";
import GraficoBarra from "@/components/graficoBarra";
import Lenguajes from "@/components/lenguajes";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PortafolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />

      <div className="h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory">
        {/* Sección 1: Introducción */}
        <section className="h-screen flex flex-col justify-center items-center text-white snap-start">
          <motion.h1
            className="text-4xl font-bold text-center mb-6"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeIn}
          >
            Mis últimos trabajos como{" "}
            <span className="text-blue-500">Analista de Datos</span>
          </motion.h1>
        </section>

        {/* Sección 2: Análisis de Bitcoin */}
        <section className="h-screen flex flex-col justify-center items-center text-white snap-start">
          <motion.div
            className="max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold mb-4">Primer <span className="text-blue-500">proyecto</span></h1>
            <h2 className="text-3xl font-bold mb-4">
              Análisis de Volatilidad y Precio del Bitcoin
            </h2>
            <p className="mb-6">
              Desarrollé un modelo predictivo con GARCH para analizar la
              volatilidad del precio de BTC, optimizando decisiones en trading
              algorítmico. Utilicé la API de Binance junto con Pandas, NumPy y
              la librería Arch en Python.
            </p>
          </motion.div>
        </section>

        {/* Sección 3: Herramientas Utilizadas */}
        <section className="h-screen flex flex-col justify-center items-center text-white snap-start">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Herramientas Utilizadas</h2>
            <p className="mb-4">Para el desarrollo del modelo de predicción de la volatilidad del precio de Bitcoin, se utilizaron React y Next.js para la construcción de una interfaz web interactiva, permitiendo la visualización dinámica de los resultados a través de gráficos y dashboards. Next.js facilitó la renderización eficiente y el manejo de rutas, mejorando la experiencia del usuario. En el backend, Python fue la herramienta clave para la implementación del modelo GARCH, utilizando bibliotecas como pandas y NumPy para la manipulación de datos, y la librería arch para el modelado de series temporales. Además, se integró la API de Binance para obtener datos históricos en tiempo real, los cuales fueron analizados y procesados para generar predicciones más precisas sobre la volatilidad del mercado.</p>
            <Lenguajes />
          </motion.div>
        </section>

        {/* Sección 4: Gráficos */}
        <section className="h-screen flex flex-col justify-center items-center text-white snap-start">
          <motion.div
            className="max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut" }}

            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">
              Gráficos de Ganancias Obtenidas
            </h2>
            <p>Este gráfico ilustra la evolución de la inversión a lo largo del tiempo, mostrando la relación entre el capital invertido y las ganancias generadas. A través de esta visualización, se pueden identificar tendencias clave, períodos de mayor rentabilidad y posibles fluctuaciones en el desempeño financiero. El análisis de estos datos proporciona una base sólida para optimizar estrategias de inversión y evaluar el impacto de las decisiones tomadas en el tiempo.</p>
            <GraficoEjemplo />
          </motion.div>
        </section>


        <section className="h-screen flex flex-col justify-center items-center text-white snap-start">
          <motion.div
            className="max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut" }}

            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mt-8 mb-4">
              Gráfico de Resultados Totales
            </h2>
            <p>Este gráfico representa el total de la operación a lo largo del mes, permitiendo visualizar el comportamiento de las transacciones en un período determinado. A través de esta representación, se pueden identificar patrones de actividad, variaciones en el volumen operado y posibles tendencias en el desempeño financiero. Este análisis facilita la toma de decisiones estratégicas al proporcionar una visión clara de la evolución de las operaciones mensuales.</p>
            <GraficoBarra />
          </motion.div>
        </section>
      </div>
    </ContainerPage>
  );
};

export default PortafolioPage;
