# SIMULADOR INTERACTIVO: REFERENCIA Y CONTRARREFERENCIA MINSA 2025

## 📋 DESCRIPCIÓN GENERAL

Simulador clínico multimodal que replica trayectorias reales de pacientes a través del sistema de salud mental peruano, enfatizando decisiones de **derivación (referencia)** y **retorno (contrarreferencia)** según protocolo MINSA.

---

## 🎯 ESTRUCTURA DE CASOS

### **CASO 1: Violencia de Pareja + Depresión**
- **Paciente:** Mujer, 34 años, Lima urbana
- **Fases:** 3 (Detección → Evaluación CSMC → Egreso)
- **Decisiones críticas:**
  1. ¿I nivel vs. CSMC en contexto de violencia + PHQ-9=19?
  2. Continuidad CSMC o contrarreferencia a Mes 3?
  3. Tipo de alta y seguimiento post-egreso
- **Enfoque:** Protocolo violencia, continuum de cuidados, contrarreferencia planificada
- **Duración estimada simulación:** 3-5 minutos

---

### **CASO 2: Esquizofrenia - Primer Brote Psicótico**
- **Paciente:** Varón, 21 años, zona rural
- **Fases:** 3 (Detección urgencia → Hospitalización → CSMC → I Nivel)
- **Decisiones críticas:**
  1. ¿I nivel vs. Hospitalización urgente en primer brote?
  2. ¿Egreso directo vs. transición CSMC?
  3. Contrarreferencia a I nivel + seguimiento indefinido
- **Enfoque:** Escalada/desescalada, manejo de psicosis crónica, modelo de continuidad
- **Duración estimada:** 3-5 minutos

---

### **CASO 3: Consumo de Heroína + Síndrome de Abstinencia**
- **Paciente:** Varón, 28 años, zona urbana periférica
- **Fases:** 2 (Crisis aguda → Estabilización CSMC)
- **Decisiones críticas:**
  1. ¿I nivel vs. CSMC en crisis de abstinencia a opioides?
  2. Transición de fase intensiva a moderada + plan egreso
- **Enfoque:** Modelo de rehabilitación escalonada, motivación del paciente, fases terapéuticas
- **Duración estimada:** 2-3 minutos

---

## 🔍 MECÁNICA DEL SIMULADOR

### **Sistema de Puntuación**
- **Respuesta correcta:** 10 puntos
- **Respuesta incorrecta:** 0 puntos
- **Máximo posible:** 90 puntos (9 decisiones × 10 puntos)
- **Escala de desempeño:**
  - 🟢 **28-30 puntos (93-100%):** Excelente → Listo para quiz avanzado
  - 🟡 **21-27 puntos (70-90%):** Bueno → Revisar casos débiles
  - 🔴 **<21 puntos (<70%):** Revisar conceptos → Repetir simulador

---

## 📐 FLUJO DE DECISIONES

```
FASE 1: DETECCIÓN INICIAL
├─ Contexto clínico presentado
├─ DECISION #1: ¿Dónde derivar?
├─ Retroalimentación inmediata
└─ Transición a siguiente fase

FASE 2: EVALUACIÓN INTERMEDIA
├─ Progresión sintomática
├─ DECISION #2: ¿Continuar o cambiar nivel?
├─ Retroalimentación clínica
└─ Transición a siguiente fase

FASE 3: EGRESO / CONTRARREFERENCIA
├─ Remisión o estabilización
├─ DECISION #3: ¿Qué tipo de alta y seguimiento?
├─ Retroalimentación sobre continuidad de cuidados
└─ Opción: Siguiente caso o reporte final

FASE 4 (Caso 3): FASE DE TRANSICIÓN
├─ Paciente estable, progresión evidente
├─ DECISION #4: ¿Escalada/desescalada apropiada?
└─ Preparación para egreso

REPORTE FINAL
├─ Puntuación total
├─ Análisis por caso
├─ Recomendaciones personalizadas
└─ Opción de reintentar
```

---

## 🎓 CONTENIDO EDUCATIVO POR DECISIÓN

Cada respuesta (correcta e incorrecta) incluye:

### **EXPLICACIÓN ESTRUCTURADA:**
1. **Veredicto:** ✓ o ✗
2. **Razón clínica principal:** 1-2 líneas máximo
3. **Protocolo MINSA:** Referencia específica (ej. "C.5. Derivación")
4. **Indicadores que la justifican:** ✓ / ✗ lista checkboxes
5. **Riesgo de error:** Si es incorrecto, ¿qué pasaría?
6. **Códigos administrativos:** Nomenclatura HIS (99700, Lab 2, etc.)

### **EJEMPLO - Respuesta Correcta (Caso 1, Fase 1):**
```
✓ CORRECTO. La derivación a CSMC es clínicamente indicada porque:

1. CAPACIDAD RESOLUTIVA: CSMC ofrece psicoterapia individual + grupal
2. PROTOCOLO VIOLENCIA: Intervenciones especializadas + coordinación protección
3. CONTINUIDAD COMUNITARIA: Mantiene acceso local sin hospitalización

DOCUMENTACIÓN MINSA:
• Diagnóstico 1º: Z60.1 (tipo: R)
• Diagnóstico 2º: F321 (tipo: R)
• Derivación/referencia (tipo: D, código 99700)
• Lab: 2 (CSMC)

TIEMPO PROMEDIO CSMC: 3-6 meses según evolución.
```

---

## 📊 INDICADORES VALIDADOS POR PROTOCOLO

### **Referencia (99700) - Indicaciones MINSA:**
```
I NIVEL → CSMC (Lab 2):
✓ TMG leve-moderado que requiere psicoterapia
✓ Violencia de pareja activa + TMG
✓ Trastornos por uso de sustancias (no psicosis aguda)
✓ TEPT, TOC, fobias sociales

I NIVEL → HOSPITALIZACIÓN (Lab 4):
✓ Primer brote psicótico (F200, F201, etc.)
✓ Ideación suicida alta + plan
✓ Heteroagresión inminente
✓ Síndrome confusional agudo
✓ Abstinencia severa sin programa disponible

CSMC → HOGAR PROTEGIDO (Lab 3):
✓ Deterioro severo tras 6+ meses CSMC
✓ Síntomas psicóticos refractarios
✓ Paciente sin familia + abandono social
✓ Conducta autolítica crónica
```

### **Contrarreferencia (Alta tipo 4) - Indicadores MINSA:**
```
HOSPITALIZACIÓN → CSMC:
✓ Remisión sintomática aguda (alucinaciones/delirios <50%)
✓ Estabilización farmacológica
✓ Capacidad para seguimiento ambulatorio
✓ Familia/red disponible para apoyo

CSMC → I NIVEL:
✓ Remisión clínica sostenida (PHQ-9 <9, sin síntomas psicóticos)
✓ Adherencia medicación >90%
✓ Red psicosocial consolidada (familia, empleo, comunidad)
✓ Funcionalidad restaurada
✓ Familia capacitada en reconocimiento de síntomas

REQUISITOS MINSA OBLIGATORIOS:
✓ Informe de contrarreferencia escrito (historia clínica)
✓ Plan de seguimiento en I nivel (frecuencia + responsables)
✓ Medicación garantizada en I nivel
✓ Contacto clínico derivador-receptor acordado
```

---

## 🛠️ CARACTERÍSTICAS TÉCNICAS

### **Versiones Disponibles:**

#### **1. SIMULADOR-REFERENCIA.HTML**
- **Formato:** HTML5 standalone (sin dependencias externas)
- **Compatibilidad:** Todos los navegadores (Chrome Android, Firefox, Safari)
- **Tamaño:** ~45 KB
- **Interactividad:** Completa en tiempo real
- **Almacenamiento:** localStorage (opcional, para guardar progreso)
- **Ventaja:** Se descarga y funciona offline

#### **2. SIMULADOR-REFERENCIA-CONTRARREFERENCIA.JSX**
- **Framework:** React 18+
- **Compatibilidad:** Desarrollo local (Vite, Create React App, etc.)
- **Características:** Estados complejos, componentes reutilizables
- **Ventaja:** Escalable para módulos futuros (quiz, casos personalizados)

---

## 📱 INTEGRACIÓN EN AUDIT-INTEACTIVO

### **Opción A: Integración RÁPIDA (Recomendado para inicio)**
```
ESTRUCTURA CARPETAS:
audit-interactivo/
├─ index.html (home)
├─ simulador/
│  ├─ referencia-contrarreferencia.html
│  ├─ README-simulador.md
│  └─ casos/
│     ├─ caso1-violencia.json
│     ├─ caso2-psicosis.json
│     └─ caso3-adicciones.json
├─ quiz/
├─ formatos/
└─ recursos/
```

**Pasos:**
1. Copia `simulador-referencia.html` a carpeta `simulador/`
2. Crea enlace en navegación principal: "Simulador → Referencia/Contrarreferencia"
3. Agrupa archivos de soporte (manual PDF, tabla de códigos)

### **Opción B: Integración PROFUNDA (Versión 2.0)**
```
REFACTORIZACIÓN:
├─ Extraer datos de casos a JSON modular
├─ Componente React reutilizable
├─ Sistema de progreso (localStorage)
├─ API de auditoría (guardar respuestas en Supabase)
├─ Módulo de reportes (exportar PDF)
└─ Gamificación (badges, leaderboard)
```

---

## ✅ VALIDACIÓN CONTRA MANUAL MINSA 2025

### **Secciones Replicadas:**
- ✓ **C.5 Derivación/Referencia:** Flujo completo, códigos labs, motivos
- ✓ **Egreso (tipo 4):** Contrarreferencia con documentación
- ✓ **Protocolos nivel:** I, CSMC, Hospitalización, Hogar protegido
- ✓ **Códigos actividad:** 99700, 99217, 99207, etc.
- ✓ **Diagnósticos CIE-10:** F200, F321, Z60.1, Z590, F11.3, etc.

### **Casos Basados en Realidad Clínica Peruana:**
- Violencia doméstica (prevalencia 30% mujeres INEI)
- Psicosis debut (incidencia 15-20/100k PERÚ)
- Trastornos por opioides (CEPS datos hospitalarios)

---

## 🎯 OBJETIVOS DE APRENDIZAJE

Al completar el simulador, el usuario puede:

1. **IDENTIFICAR** criterios de derivación según protocolo MINSA
2. **APLICAR** códigos administrativos (99700, Lab destino) correctamente
3. **DISTINGUIR** entre derivación vs. contrarreferencia
4. **JUSTIFICAR** decisiones clínicas usando evidencia (síntomas, funcionalidad, red)
5. **CONSTRUIR** planes de seguimiento post-egreso
6. **RECONOCER** indicadores de progresión/recaída
7. **DOCUMENTAR** formalmente referencia/contrarreferencia en Historia Clínica

---

## 📊 ESTADÍSTICAS ESPERADAS

### **Tiempo de Uso:**
- Caso completo: 3-5 minutos (lectura + decisión)
- Los 3 casos: 9-15 minutos total
- Incluyendo reporte: 12-18 minutos

### **Tasa de Aciertos Típica (sin entrenamiento):**
- Profesionales clínicos: 70-80% (conocimiento implícito)
- Administrativos/nuevos: 40-60% (requiere aprendizaje)
- Post-simulador x2: 85-95% (competencia demostrada)

---

## 🔗 PRÓXIMO MÓDULO: QUIZ AVANZADO

Una vez completado el simulador:

**QUIZ CAPSTONE (15 preguntas, 20 minutos):**
1. Preguntas de opción múltiple (conceptos puntuales)
2. Casos breves (2-3 líneas, decisión rápida)
3. Viñetas clínicas (conectar síntomas → indicador → acción)
4. Validación de documentación (¿Qué falta en este informe de derivación?)

**Criterio de paso:** 80% (12/15 correctas)

---

## 📝 NOTAS PARA FORMADORES

### **Errores Comunes a Enfatizar:**

1. **"Derivar prematuramente a hospitalización"**
   - Riesgo: Innecesaria, costosa, rompe vínculos
   - Enseñanza: Escalar gradualmente (I nivel → CSMC → Hogar → Hospitalización)

2. **"Cerrar caso sin contrarreferencia"**
   - Riesgo: Interrupción de continuidad, recaída
   - Enseñanza: Contrarreferencia planificada = puerta abierta

3. **"Mantener indefinidamente en nivel superior"**
   - Riesgo: Dependencia institucional, saturación de CSMC
   - Enseñanza: Deescalada con objetivos claros

4. **"Confundir derivación con referencia"**
   - Riesgo: Documentación incorrecta, errores administrativos
   - Enseñanza: Derivación (acción inicial) ≠ Referencia (tipo de derivación)

---

## 💾 EXPORTACIÓN Y DESCARGA

**Usuarios pueden:**
- ✓ Descargar HTML (funciona offline)
- ✓ Capturar pantalla de reporte (PNG/screenshot)
- ✓ Exportar resultado como PDF (función futura)
- ✓ Compartir puntuación (código QR o link compartible)

---

## 📞 SOPORTE Y RETROALIMENTACIÓN

Si hay casos clínicos que deseas agregar:
1. Estructura: Fase + Contexto + 3 decisiones
2. Validación: Protocolo MINSA + códigos HIS
3. Retroalimentación: Explicaciones educativas claras

**Casos candidatos para versión 2.0:**
- Trastorno bipolar con manía aguda
- Demencia con conducta desafiante
- Pacientes sin familia (indigencia)
- Comorbilidad psychiatría + medicina general

---

**Versión:** 1.0 (2025)  
**Última actualización:** Manual MINSA Salud Mental 2025  
**Autor:** AUDIT-INTEACTIVO Team
