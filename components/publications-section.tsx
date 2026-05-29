"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const publications = [
  {
    title:
      "SRS-Aided Channel Estimation and Doppler-Adaptive CSI Reuse for 5G NR MU-MIMO: A Slot-Level Performance Evaluation",

    venue: "2026 National Conference on Communications (NCC)",

    authors: [
      "Lalit Kumar Bharti",
      "Adarsh Ravi",
      "Krishnan Venkataraghvan",
      "Preetam Kumar",
    ],

    collaboration: "IIT Patna + Rakuten Mobile",

    year: "2026",

    ieeeLink:
      "https://ieeexplore.ieee.org/document/11479061",

    pdfLink:
     "https://ieeexplore.ieee.org/document/11479061",

    doi: "10.1109/NCC68160.2026.11479061",

    abstract:
      "Accurate channel knowledge is essential for enabling efficient multi-user multi-input multi-output (MU-MIMO) transmission in fifth-generation (5G) new radio (NR) systems. Channel state information (CSI) in 5G NR time-division duplexing (TDD) systems is calculated through uplink (UL) sounding reference signals (SRS), using channel reciprocity for downlink (DL) precoding. In the case of massive MU-MIMO, accurate CSI at the transmitter is needed for beamforming or precoding. However, under high mobility, the channel varies rapidly, causing UL-acquired CSI to become outdated within a few slots. Increasing the SRS transmission rate mitigates CSI ageing but significantly raises UL overhead and computational load at the gNodeB (gNB). This paper proposes a Doppler-aware, slotwise CSI acquisition and precoding framework that dynamically adapts CSI updates using an adaptive reuse mechanism. The framework selects whether to refresh or reuse the CSI based on the estimated Doppler shift and condition number. System-level simulations have been done in a slot-wise TDD environment. The 3rd generation partnership project (3 GPP) cluster delayed line (CDL) channel has been considered with per slot Doppler fluctuation between 60-185 Hz. The role of channel subspace degrees of freedom (DoFs) in selecting suitable precoders for single-user MIMO (SU-MIMO) and MU-MIMO operation has also been examined. The simulation results demonstrate a 2-fold improvement in the sum-spectral efficiency (SE) as compared to SU-MIMO at high signal-to-noise ratio (SNR). A reduction of 15−20% has been observed in the computational complexity, while maintaining robust block error rate (BLER) performance under varying Doppler values.",

    keywords: [
      "5G NR",
      "MU-MIMO",
      "SU-MIMO",
      "Massive MIMO",
      "CSI",
      "SRS",
      "Precoding",
      "Doppler",
      "Channel Estimation",
    ],

    citations: 0,

    status: "Published",

    bibtex: `@INPROCEEDINGS{11479061,
  author={Bharti, Lalit Kumar and Ravi, Adarsh and Venkataraghvan, Krishnan and Kumar, Preetam},
  booktitle={2026 National Conference on Communications (NCC)}, 
  title={SRS-Aided Channel Estimation and Doppler-Adaptive CSI Reuse for 5G NR MU-MIMO: A Slot-Level Performance Evaluation}, 
  year={2026},
  pages={543-548},
  keywords={5G mobile communication;MIMO;Massive MIMO;channel state information (CSI);sounding reference signal (SRS);precoding},
  doi={10.1109/NCC68160.2026.11479061}
}`,
  },

  /* 2nd publication ... */
{
title:
"SRS-Based CSI Quality Assessment and Selection for MU-MIMO Precoding in 5G NR",

venue:
"IEEE International Conference on Signal Processing and Communications (SPCOM 2026)",

authors: [
"Lalit Kumar Bharti",
"Adarsh Ravi",
"Hamza Bouchebbah",
"Seshashayi Thalluri",
"Krishnan Venkataraghvan",
"and Preetam Kumar",
],

collaboration: "IIT Patna + Rakuten Mobile",

year: "2026",

ieeeLink: "#",

pdfLink: "#",

doi: "To Be Assigned",

abstract:
"Stable downlink precoding in time-division duplex (TDD) multi-user multi-input multi-output (MU-MIMO) systems critically depends on the reliability of channel state information (CSI) at the transmitter. In mobile environments, Doppler-induced channel variation, estimation noise, and pilot contamination distort the channel structure, often leading to ill-conditioned matrices and unstable linear precoding. This paper proposes a Doppler-aware CSI reliability framework in which the condition number of sounding reference signal (SRS)-based channel estimates is used as a per-snapshot indicator of spatial robustness. Instead of relying solely on instantaneous CSI, the proposed approach selects the better-conditioned CSI between current and previously estimated channel realizations prior to downlink transmission, thereby improving robustness under mobility. System-level simulations compliant with 5G New Radio specifications are conducted under fixed, increasing, and decreasing Doppler scenarios using clustered delay line (CDL) channel models. Results show consistent gains in throughput and block error rate (BLER), approaching the performance of perfect channel state information at the transmitter (CSIT). Among the considered schemes, regularized zero forcing (RZF) precoding exhibits higher robustness to CSI degradation, while block diagonalization (BD) is more sensitive to Doppler variations. Overall, the proposed method provides a lightweight and standards-compatible solution for improving MU-MIMO precoding reliability in time-varying channels.",

keywords: [
"5G NR",
"MU-MIMO",
"CSI",
"SRS",
"Precoding",
],

citations: 0,

status: "Accepted",

bibtex:
"Paper accepted at SPCOM 2026. Final BibTeX and DOI will be updated after publication."
},



/* 3rd publication ... */

{
  title:
    "Failure-Aware Adaptive Velocity Estimation in SSB-based Multi-Target Sensing",

  venue: "IEEE Communications Letters",

  authors: [
    "Lalit Kumar Bharti",
    "Sushant Kumar Jha",
    "Abhinav Anand",
    "and Preetam Kumar",
  ],

  collaboration: "IIT Patna",

  year: "2026",

  ieeeLink: "#",

  pdfLink: "#",

  doi: "Under Review",

  abstract:
    "This manuscript investigates failure-aware adaptive velocity estimation in synchronization signal block (SSB)-based multi-target sensing for 5G NR systems. The proposed framework dynamically adjusts velocity estimation strategies based on sensing failure probabilities, leveraging machine learning to enhance robustness under varying mobility and channel conditions. Simulation results demonstrate improved velocity estimation accuracy and reduced failure rates compared to traditional methods.",

  keywords: [
    "5G NR",
    "ISAC",
    "SSB",
    "Velocity Estimation",
    "eigenvalue spread",
  ],

  citations: 0,

  status: "Under Review",

  bibtex: `Manuscript currently under review.`,

},



]

export function PublicationsSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const copyBibtex = async (bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex)
      alert("BibTeX citation copied!")
    } catch (err) {
      console.error("Failed to copy citation")
    }
  }

  return (
    <section
      id="publications"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full glass-card text-sm text-primary mb-4"
            >
              Academic Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              <span className="text-primary text-glow-cyan">
                Publications
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Peer-reviewed research contributions in wireless
              communication, 5G NR, MU-MIMO, and signal processing.
            </motion.p>
          </div>

          {/* Publications */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.5 + index * 0.1,
                }}
                className="glass-card rounded-2xl p-6 md:p-8 gradient-border group hover:scale-[1.01] transition-transform"
              >
                {/* Top */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                          className={`px-3 py-1 rounded-full text-xs border ${
                           pub.status === "Published"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : pub.status === "Accepted"
                             ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                         }`}
                          >
                       {pub.status}
                  </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-mono">
                      {pub.year}
                    </span>

                    <span>
                      {pub.citations} citations
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {pub.title}
                </h3>

                {/* Venue */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="text-accent font-medium">
                    {pub.venue}
                  </span>

                  <span className="text-muted-foreground">
                    |
                  </span>

                  <span className="text-muted-foreground">
                    {pub.collaboration}
                  </span>
                </div>

                {/* Authors */}
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    Authors:
                  </span>

                  <span className="text-sm text-foreground ml-2">
                    {pub.authors.join(", ")}
                  </span>
                </div>

                {/* Abstract */}
                <div className="mb-6 p-4 rounded-lg bg-muted/30">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Abstract
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Keywords
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  
                  {/* IEEE */}
                  <a
                    href={pub.ieeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    View on IEEE Xplore
                  </a>

                  {/* PDF */}
                  <a
                    href={pub.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Download PDF
                  </a>

                  {/* BibTeX */}
                  <button
                    onClick={() =>
                      copyBibtex(pub.bibtex)
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Copy BibTeX Citation
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground text-sm">
              More publications and research contributions coming
              soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}