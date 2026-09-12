import './App.css'

const APK_URL =
  'https://github.com/wiindevelopment/ERPRR_mobile/releases/latest/download/ERPRR.apk'

const steps = [
  {
    title: 'Download the APK',
    detail: 'Tap the "Download APK" button above. The file (ERPRR.apk) will be saved to your device, usually in the Downloads folder.',
  },
  {
    title: 'Allow installs from unknown sources',
    detail:
      'Since the app isn\'t installed from the Play Store, Android will block it by default. Go to Settings > Apps > Special access > Install unknown apps, choose your browser or file manager, and enable "Allow from this source".',
  },
  {
    title: 'Open the downloaded file',
    detail: 'Open your Downloads folder (or the notification from your browser) and tap on ERPRR.apk to start the installation.',
  },
  {
    title: 'Install the app',
    detail: 'Tap "Install" when prompted. Android may show a warning since the app is from outside the Play Store — tap "Install anyway" to continue.',
  },
  {
    title: 'Grant permissions',
    detail: 'When you first open the app, allow any permissions it requests (such as camera or storage) so it can work correctly.',
  },
  {
    title: 'Start using ERPRR',
    detail: 'Once installed, open the app from your home screen or app drawer and log in to start recording meter readings.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>ERPRR Meter Reading App</h1>
        <p className="subtitle">
          Download the Android app to start recording meter readings on the go.
        </p>
        <a className="download-button" href={APK_URL} download>
          Download APK
        </a>
        <p className="hint">Works on Android devices. The latest version is always downloaded.</p>
      </header>

      <main className="manual">
        <h2>Setup Manual</h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number">{index + 1}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <footer className="footer">
        <p>Having trouble installing? Contact your system administrator for help.</p>
      </footer>
    </div>
  )
}

export default App
