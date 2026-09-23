# Proje klasöründe çalıştırın:  powershell -ExecutionPolicy Bypass -File .\SIL.ps1
$paths = @(
  "app\(tr)\contractory", "app\(tr)\alphaos", "app\(tr)\authorai",
  "app\(en)\en\contractory", "app\(en)\en\alphaos", "app\(en)\en\authorai",
  "app\(sq)\sq\contractory", "app\(sq)\sq\alphaos", "app\(sq)\sq\authorai",
  "components\product-page.tsx", "components\products-intro.tsx", "components\products.tsx",
  "components\contractory-section.tsx", "components\alphaos-section.tsx", "components\authorai-section.tsx",
  "components\contractory", "components\alphaos", "components\authorai",
  "components\mockups\contractory.tsx", "components\mockups\alphaos.tsx",
  "components\mockups\authorai.tsx", "components\mockups\device-frame.tsx",
  "lib\contractory-i18n.ts", "lib\alphaos-i18n.ts", "lib\authorai-i18n.ts",
  "lib\contractory.ts", "lib\alphaos.ts", "lib\authorai.ts", "lib\projects.ts",
  "out", ".next"
)
foreach ($p in $paths) {
  if (Test-Path -LiteralPath $p) { Remove-Item -LiteralPath $p -Recurse -Force; Write-Host "silindi: $p" }
}
