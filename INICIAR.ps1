# Script para iniciar TechSolutions Frontend y Backend

Write-Host "🚀 Iniciando TechSolutions - Desarrollo de Software y Robótica" -ForegroundColor Cyan
Write-Host ""

# Verificar si Node.js está instalado
$nodeVersion = node --version 2>$null
if (-not $nodeVersion) {
    Write-Host "❌ Error: Node.js no está instalado" -ForegroundColor Red
    Write-Host "Por favor instala Node.js desde https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Node.js detectado: $nodeVersion" -ForegroundColor Green

# Verificar si las dependencias están instaladas
if (-not (Test-Path ".\frontendSoftware\node_modules")) {
    Write-Host "📦 Instalando dependencias del frontend..." -ForegroundColor Yellow
    Set-Location .\frontendSoftware
    npm install
    Set-Location ..
}

if (-not (Test-Path ".\backend\node_modules")) {
    Write-Host "📦 Instalando dependencias del backend..." -ForegroundColor Yellow
    Set-Location .\backend
    npm install
    Set-Location ..
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  INSTRUCCIONES DE INICIO" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  BACKEND (Puerto 3000):" -ForegroundColor Yellow
Write-Host "   cd backend" -ForegroundColor White
Write-Host "   node index.js" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣  FRONTEND (Puerto 5173):" -ForegroundColor Yellow
Write-Host "   cd frontendSoftware" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "3️⃣  BASE DE DATOS:" -ForegroundColor Yellow
Write-Host "   - Asegúrate de que MySQL esté corriendo" -ForegroundColor White
Write-Host "   - Importa backend/bd.sql" -ForegroundColor White
Write-Host "   - Usuario: root, Password: root, DB: dbventas" -ForegroundColor White
Write-Host ""
Write-Host "4️⃣  CHATBOT (Opcional):" -ForegroundColor Yellow
Write-Host "   - Instala Ollama: https://ollama.ai" -ForegroundColor White
Write-Host "   - Ejecuta: ollama run gemma3" -ForegroundColor White
Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Preguntar si desea iniciar automáticamente
$respuesta = Read-Host "¿Deseas iniciar el backend ahora? (S/N)"
if ($respuesta -eq "S" -or $respuesta -eq "s") {
    Write-Host ""
    Write-Host "🔥 Iniciando Backend en http://localhost:3000..." -ForegroundColor Green
    Write-Host "   (Presiona Ctrl+C para detener)" -ForegroundColor Gray
    Write-Host ""
    Set-Location .\backend
    node index.js
}
