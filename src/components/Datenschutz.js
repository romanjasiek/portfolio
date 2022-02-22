import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import PrivacySeal from '../img/misc/dsg-seal-pp-de.png'

const Datenschutz = () => {
  return (
    <section className='datenschutz__container'>
      <h3 className='datenschutz__heading'>Datenschutzerklärung</h3>
      <div>
        <h2 id='m14'>Einleitung</h2>
        <p className='datenschutz__text'>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in
          welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von
          uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
          unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
          Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend
          zusammenfassend bezeichnet als "Onlineangebot“).
        </p>
        <p className='datenschutz__text'>
          Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
        </p>
        <p className='datenschutz__text'>Stand: 3. Februar 2022</p>
        <h2>Inhaltsübersicht</h2>{' '}
        <ul className='index'>
          <li>
            <a className='index-link' href='#m14'>
              Einleitung
            </a>
          </li>
          <li>
            <a className='index-link' href='#m3'>
              Verantwortlicher
            </a>
          </li>
          <li>
            <a className='index-link' href='#mOverview'>
              Übersicht der Verarbeitungen
            </a>
          </li>
          <li>
            <a className='index-link' href='#m13'>
              Maßgebliche Rechtsgrundlagen
            </a>
          </li>
          <li>
            <a className='index-link' href='#m27'>
              Sicherheitsmaßnahmen
            </a>
          </li>
          <li>
            <a className='index-link' href='#m25'>
              Übermittlung von personenbezogenen Daten
            </a>
          </li>
          <li>
            <a className='index-link' href='#m12'>
              Löschung von Daten
            </a>
          </li>
          <li>
            <a className='index-link' href='#m317'>
              Geschäftliche Leistungen
            </a>
          </li>
          <li>
            <a className='index-link' href='#m225'>
              Bereitstellung des Onlineangebotes und Webhosting
            </a>
          </li>
          <li>
            <a className='index-link' href='#m182'>
              Kontakt- und Anfragenverwaltung
            </a>
          </li>
          <li>
            <a className='index-link' href='#m15'>
              Änderung und Aktualisierung der Datenschutzerklärung
            </a>
          </li>
          <li>
            <a className='index-link' href='#m42'>
              Begriffsdefinitionen
            </a>
          </li>
        </ul>
        <h2 id='m3'>Verantwortlicher</h2>
        <p className='datenschutz__text'>
          Roman Jasiek
          <br />
          Schillerstr. 47
          <br />
          39108 Magdeburg
          <br />
          Deutschland
        </p>
        <p className='datenschutz__text'>
          E-Mail-Adresse:{' '}
          <a href='mailto:romanjasiek@me.com'>romanjasiek@me.com</a>
        </p>
        <p className='datenschutz__text'>Telefon: 0172-4563446</p>
        <p className='datenschutz__text'>
          Impressum:{' '}
          <a
            href='https://romanjasiek.de/impressum'
            target='_blank'
            rel='noreferrer'
          >
            https://romanjasiek.de/impressum
          </a>
        </p>
        <h2 id='mOverview'>Übersicht der Verarbeitungen</h2>
        <p className='datenschutz__text'>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten.</li>
          <li>Zahlungsdaten.</li>
          <li>Kontaktdaten.</li>
          <li>Inhaltsdaten.</li>
          <li>Vertragsdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-/Kommunikationsdaten.</li>
        </ul>
        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kunden.</li>
          <li>Interessenten.</li>
          <li>Kommunikationspartner.</li>
          <li>Nutzer.</li>
          <li>Geschäfts- und Vertragspartner.</li>
          <li>Schüler/ Studenten/ Teilnehmer.</li>
        </ul>
        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>Büro- und Organisationsverfahren.</li>
          <li>Verwaltung und Beantwortung von Anfragen.</li>
          <li>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
        </ul>
        <h3 id='m13'>Maßgebliche Rechtsgrundlagen</h3>
        <p className='datenschutz__text'>
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
          DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
          nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.
        </p>
        <ul>
          <li>
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b. DSGVO)
            </strong>{' '}
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </li>
          <li>
            <strong>
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
            </strong>{' '}
            - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
            erforderlich, der der Verantwortliche unterliegt.
          </li>
          <li>
            <strong>
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
            </strong>{' '}
            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
        <p className='datenschutz__text'>
          Zusätzlich zu den Datenschutzregelungen der
          Datenschutz-Grundverordnung gelten nationale Regelungen zum
          Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum
          Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
          und zur Übermittlung sowie automatisierten Entscheidungsfindung im
          Einzelfall einschließlich Profiling. Des Weiteren regelt es die
          Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26
          BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder
          Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
          Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
          Bundesländer zur Anwendung gelangen.
        </p>
        <h2 id='m27'>Sicherheitsmaßnahmen</h2>
        <p className='datenschutz__text'>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p className='datenschutz__text'>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
          Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
          die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
          gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
          sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>
        <p className='datenschutz__text'>
          SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot
          übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung.
          Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https://
          in der Adresszeile Ihres Browsers.
        </p>
        <h2 id='m25'>Übermittlung von personenbezogenen Daten</h2>
        <p className='datenschutz__text'>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
          vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt oder
          sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
          können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter
          von Diensten und Inhalten, die in eine Webseite eingebunden werden,
          gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und
          schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die
          dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
        </p>
        <h2 id='m12'>Löschung von Daten</h2>
        <p className='datenschutz__text'>
          Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
          Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
          Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
          (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
          sie für den Zweck nicht erforderlich sind).
        </p>
        <p className='datenschutz__text'>
          Sofern die Daten nicht gelöscht werden, weil sie für andere und
          gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
          auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
          für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
          handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder
          deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
          oder juristischen Person erforderlich ist.
        </p>
        <p className='datenschutz__text'>
          Unsere Datenschutzhinweise können ferner weitere Angaben zu der
          Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen
          Verarbeitungen vorrangig gelten.
        </p>
        <h2 id='m317'>Geschäftliche Leistungen</h2>
        <p className='datenschutz__text'>
          Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
          Kunden und Interessenten (zusammenfassend bezeichnet als
          "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren
          Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen
          der Kommunikation mit den Vertragspartnern (oder vorvertraglich),
          z.B., um Anfragen zu beantworten.
        </p>
        <p className='datenschutz__text'>
          Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen
          zu erfüllen. Dazu gehören insbesondere die Verpflichtungen zur
          Erbringung der vereinbarten Leistungen, etwaige
          Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und
          sonstigen Leistungsstörungen. Darüber hinaus verarbeiten wir die Daten
          zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten
          verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation.
          Darüber hinaus verarbeiten wir die Daten auf Grundlage unserer
          berechtigten Interessen an einer ordnungsgemäßen und
          betriebswirtschaftlichen Geschäftsführung sowie an
          Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und unseres
          Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten,
          Geheimnisse, Informationen und Rechte (z.B. zur Beteiligung von
          Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie
          Subunternehmern, Banken, Steuer- und Rechtsberatern,
          Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden
          Rechts geben wir die Daten von Vertragspartnern nur insoweit an Dritte
          weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung
          gesetzlicher Pflichten erforderlich ist. Über weitere Formen der
          Verarbeitung, z.B. zu Marketingzwecken, werden die Vertragspartner im
          Rahmen dieser Datenschutzerklärung informiert.
        </p>
        <p className='datenschutz__text'>
          Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir
          den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in
          Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw.
          Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
        </p>
        <p className='datenschutz__text'>
          Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
          vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4
          Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert
          werden, z.B., solange sie aus gesetzlichen Gründen der Archivierung
          aufbewahrt werden müssen (z.B. für Steuerzwecke im Regelfall 10
          Jahre). Daten, die uns im Rahmen eines Auftrags durch den
          Vertragspartner offengelegt wurden, löschen wir entsprechend den
          Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
        </p>
        <p className='datenschutz__text'>
          Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
          Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und
          den Anbietern die Geschäftsbedingungen und Datenschutzhinweise der
          jeweiligen Drittanbieter oder Plattformen.{' '}
        </p>
        <p className='datenschutz__text'>
          <strong>Bildungs- und Schulungsleistungen</strong>
        </p>
        <p className='datenschutz__text'>
          Wir verarbeiten die Daten der Teilnehmer unserer Bildungs- und
          Schulungsangebote (einheitlich bezeichnet als "Aus- und
          Fortzubildende“), um ihnen gegenüber unsere Schulungsleistungen
          erbringen zu können. Die hierbei verarbeiteten Daten, die Art, der
          Umfang, der Zweck und die Erforderlichkeit ihrer Verarbeitung
          bestimmen sich nach dem zugrundeliegenden Vertrags- und
          Schulungsverhältnis. Zu den Verarbeitungsformen gehören auch die
          Leistungsbewertung und die Evaluation unserer Leistungen sowie jener
          der Lehrenden.
        </p>
        <p className='datenschutz__text'>
          In Rahmen unserer Tätigkeit können wir ferner besondere Kategorien von
          Daten, hier insbesondere Angaben zur Gesundheit der Aus- und
          Fortzubildenden sowie Daten, aus denen die ethnische Herkunft,
          politische Meinungen, religiöse oder weltanschauliche Überzeugungen
          hervorgehen, verarbeiten. Hierzu holen wir, sofern erforderlich, eine
          ausdrückliche Einwilligung der Aus- und Fortzubildenden ein und
          verarbeiten die besonderen Kategorien von Daten ansonsten nur, wenn es
          zur Erbringung der Schulungsleistungen, zu Zwecken der
          Gesundheitsvorsorge, des Sozialschutzes oder des Schutzes
          lebensnotwendiger Interessen der Aus- und Fortzubildenden erforderlich
          ist.
        </p>
        <p className='datenschutz__text'>
          Sofern es für unsere Vertragserfüllung, zum Schutz lebenswichtiger
          Interessen oder gesetzlich erforderlich ist, bzw. eine Einwilligung
          der Aus- und Fortzubildenden vorliegt, offenbaren oder übermitteln wir
          die Daten der Aus- und Fortzubildenden unter Beachtung der
          berufsrechtlichen Vorgaben an Dritte oder Beauftragte, wie z.B.
          Behörden oder im Bereich der IT, der Büro- oder vergleichbarer
          Dienstleistungen.
        </p>
        <p className='datenschutz__text'>
          <strong>Künstlerische und literarische Leistungen</strong>
        </p>
        <p className='datenschutz__text'>
          Wir verarbeiten die Daten unserer Auftraggeber, um ihnen die Auswahl,
          den Erwerb bzw. die Beauftragung der gewählten Leistungen oder Werke
          sowie verbundener Tätigkeiten als auch deren Bezahlung und Zustellung
          bzw. Ausführung oder Erbringung zu ermöglichen.
        </p>
        <p className='datenschutz__text'>
          Die erforderlichen Angaben sind als solche im Rahmen des Auftrags-,
          Bestell- bzw. vergleichbaren Vertragsschlusses gekennzeichnet und
          umfassen die zur Auslieferung und Abrechnung benötigten Angaben sowie
          Kontaktinformationen, um etwaige Rücksprachen halten zu können.
        </p>
        <p className='datenschutz__text'>
          <strong>Veranstaltungen und Events</strong>
        </p>
        <p className='datenschutz__text'>
          Wir verarbeiten die Daten der Teilnehmer der von uns angebotenen oder
          ausgerichteten Veranstaltungen, Events und ähnlichen Aktivitäten
          (nachfolgend einheitlich als "Teilnehmer" und „Veranstaltungen“
          bezeichnet), um ihnen die Teilnahme an den Veranstaltungen und
          Inanspruchnahme der mit der Teilnahme verbundenen Leistungen oder
          Aktionen zu ermöglichen.{' '}
        </p>
        <p className='datenschutz__text'>
          Sofern wir in diesem Rahmen gesundheitsbezogene Daten, religiöse,
          politische oder sonstige besondere Kategorien von Daten verarbeiten,
          dann erfolgt diese im Rahmen der Offenkundigkeit (z.B. bei thematisch
          ausgerichteten Veranstaltungen oder dient der Gesundheitsvorsorge,
          Sicherheit oder erfolgt mit Einwilligung der Betroffenen).
        </p>
        <p className='datenschutz__text'>
          Die erforderlichen Angaben sind als solche im Rahmen des Auftrags-,
          Bestell- bzw. vergleichbaren Vertragsschlusses gekennzeichnet und
          umfassen die zur Leistungserbringung und Abrechnung benötigten Angaben
          sowie Kontaktinformationen, um etwaige Rücksprachen halten zu können.
          Soweit wir Zugang zu Informationen der Endkunden, Mitarbeitern oder
          anderer Personen erhalten, verarbeiten wir diese im Einklang mit den
          gesetzlichen und vertraglichen Vorgaben.
        </p>
        <ul className='m-elements'>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
            Adressen); Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
            Zahlungshistorie); Kontaktdaten (z.B. E-Mail, Telefonnummern);
            Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Interessenten; Geschäfts- und
            Vertragspartner; Schüler/ Studenten/ Teilnehmer; Kunden.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
            Leistungen und Kundenservice; Kontaktanfragen und Kommunikation;
            Büro- und Organisationsverfahren; Verwaltung und Beantwortung von
            Anfragen.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
            vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
            Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO);
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h2 id='m225'>Bereitstellung des Onlineangebotes und Webhosting</h2>
        <p className='datenschutz__text'>
          Um unser Onlineangebot sicher und effizient bereitstellen zu können,
          nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
          in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern)
          das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
          Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
          Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
          technische Wartungsleistungen in Anspruch nehmen.
        </p>
        <p className='datenschutz__text'>
          Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
          Daten können alle die Nutzer unseres Onlineangebotes betreffenden
          Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
          anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
          um die Inhalte von Onlineangeboten an Browser ausliefern zu können,
          und alle innerhalb unseres Onlineangebotes oder von Webseiten
          getätigten Eingaben.
        </p>
        <ul className='m-elements'>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B.
            Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte
            Webseiten, Interesse an Inhalten, Zugriffszeiten);
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Nutzer (z.B.
            Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
            Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
            Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <p className='datenschutz__text'>
          <strong>
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
          </strong>
        </p>
        <ul className='m-elements'>
          <li>
            <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Wir selbst
            (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf
            den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können
            die Adresse und Name der abgerufenen Webseiten und Dateien, Datum
            und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
            erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
            des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
            Regelfall IP-Adressen und der anfragende Provider gehören. Die
            Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt
            werden, z.B., um eine Überlastung der Server zu vermeiden
            (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
            DDoS-Attacken) und zum anderen, um die Auslastung der Server und
            ihre Stabilität sicherzustellen;{' '}
            <strong>Löschung von Daten:</strong> Logfile-Informationen werden
            für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht
            oder anonymisiert. Daten, deren weitere Aufbewahrung zu
            Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des
            jeweiligen Vorfalls von der Löschung ausgenommen.
          </li>
          <li>
            <strong>STRATO: </strong>Leistungen auf dem Gebiet der
            Bereitstellung von informationstechnischer Infrastruktur und
            verbundenen Dienstleistungen (z.B. Speicherplatz und/oder
            Rechenkapazitäten); <strong>Dienstanbieter:</strong> STRATO AG,
            Pascalstraße 10,10587 Berlin, Deutschland; <strong>Website:</strong>{' '}
            <a href='https://www.strato.de' target='_blank' rel='noreferrer'>
              https://www.strato.de
            </a>
            ; <strong>Datenschutzerklärung:</strong>{' '}
            <a
              href='https://www.strato.de/datenschutz'
              target='_blank'
              rel='noreferrer'
            >
              https://www.strato.de/datenschutz
            </a>
            ; <strong>Auftragsverarbeitungsvertrag:</strong> mit Anbieter
            abgeschlossen.
          </li>
        </ul>
        <h2 id='m182'>Kontakt- und Anfragenverwaltung</h2>
        <p className='datenschutz__text'>
          Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
          Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer-
          und Geschäftsbeziehungen werden die Angaben der anfragenden Personen
          verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und
          etwaiger angefragter Maßnahmen erforderlich ist.
        </p>
        <p className='datenschutz__text'>
          Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt-
          und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen
          Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder
          zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
          Grundlage der berechtigten Interessen an der Beantwortung der Anfragen
          und Pflege von Nutzer- bzw. Geschäftsbeziehungen.
        </p>
        <ul className='m-elements'>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
            Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten
            (z.B. Eingaben in Onlineformularen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Kommunikationspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
            Kommunikation.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
            vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h2 id='m15'>Änderung und Aktualisierung der Datenschutzerklärung</h2>
        <p className='datenschutz__text'>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer
          Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns
          durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
          informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
          Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle
          Benachrichtigung erforderlich wird.
        </p>
        <p className='datenschutz__text'>
          Sofern wir in dieser Datenschutzerklärung Adressen und
          Kontaktinformationen von Unternehmen und Organisationen angeben,
          bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
          können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>
        <h2 id='m42'>Begriffsdefinitionen</h2>
        <p className='datenschutz__text'>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
          Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
          sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
          gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
          Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
          Begriffe sind alphabetisch sortiert.
        </p>
        <ul className='glossary'>
          <li>
            <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“
            sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person (im Folgenden "betroffene
            Person“) beziehen; als identifizierbar wird eine natürliche Person
            angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
            zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
            Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem
            oder mehreren besonderen Merkmalen identifiziert werden kann, die
            Ausdruck der physischen, physiologischen, genetischen, psychischen,
            wirtschaftlichen, kulturellen oder sozialen Identität dieser
            natürlichen Person sind.{' '}
          </li>
          <li>
            <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die
            natürliche oder juristische Person, Behörde, Einrichtung oder andere
            Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
            Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
            bezeichnet.{' '}
          </li>
          <li>
            <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder
            ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
            solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
            Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
            Daten, sei es das Erheben, das Auswerten, das Speichern, das
            Übermitteln oder das Löschen.{' '}
          </li>
        </ul>
        <p className='seal'>
          <a
            href='https://datenschutz-generator.de/'
            title='Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken.'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <img
              src={PrivacySeal}
              alt='Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken.'
              width={250}
              height={250}
            />
          </a>
        </p>
      </div>

      <div className='datenschutz__close-link'>
        <Link to='/'>
          <p>
            <FontAwesomeIcon icon={faTimesCircle} />Datenschutzerklärung
            schließen
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Datenschutz;
