"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const publications = [
  {
    title: "SRS-Aided Channel Estimation and Doppler-Adaptive CSI Reuse for 5G NR MU-MIMO: A Slot-Level Performance Evaluation",
    venue: "IEEE 32nd National Conference on Communications (NCC) 2026",
    authors: ["Lalit Kumar Bharti", "Adrash Ravi", " Krishnan Venkataraghvan"," and Preetam Kumar "],
    collaboration: "IIT Patna + Rakuten Mobile",
    year: "2026",
    doi: "10.1109/NCC68160.2026.11479061",
    abstract: "Accurate channel knowledge is essential for enabling efficient multi-user multi-input multi-output (MU-MIMO) transmission in fifth-generation (5G) new radio (NR) systems. Channel state information (CSI) in 5G NR time-division duplexing (TDD) systems is calculated through uplink (UL) sounding reference signals (SRS), using channel reciprocity for downlink (DL) precoding. In the case of massive MU-MIMO, accurate CSI at the transmitter is needed for beamforming or precoding. However, under high mobility, the channel varies rapidly, causing UL-acquired CSI to become outdated within a few slots. Increasing the SRS transmission rate mitigates CSI ageing but significantly raises UL overhead and computational load at the gNodeB (gNB). This paper proposes a Doppler-aware, slotwise CSI acquisition and precoding framework that dynamically adapts CSI updates using an adaptive reuse mechanism. The framework selects whether to refresh or reuse the CSI based on the estimated Doppler shift and condition number. System-level simulations have been done in a slot-wise TDD environment. The 3rd generation partnership project (3 GPP) cluster delayed line (CDL) channel has been considered with per slot Doppler fluctuation between 60-185 Hz. The role of channel subspace degrees of freedom (DoFs) in selecting suitable precoders for single-user MIMO (SU-MIMO) and MU-MIMO operation has also been examined. The simulation results demonstrate a 2-fold improvement in the sum-spectral efficiency (SE) as compared to SU-MIMO at high signal-to-noise ratio (SNR). A reduction of 15−20% has been observed in the computational complexity, while maintaining robust block error rate (BLER) performance under varying Doppler values.",
    keywords: ["5G NR", "MU-MIMO", "SRS", "Channel Estimation", "CSI Reuse", "Doppler"],
    citations: 0,
    status: "Published",
  },
]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="publications" className="relative py-24 overflow-hidden">
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
          {/* Section Header */}
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
              <span className="text-primary text-glow-cyan">Publications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Peer-reviewed research contributions to the field of wireless communication.
            </motion.p>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 gradient-border group hover:scale-[1.01] transition-transform"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                        {pub.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-mono">{pub.year}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span>{pub.citations} citations</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {pub.title}
                </h3>

                {/* Venue & Collaboration */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="text-accent font-medium">{pub.venue}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground">{pub.collaboration}</span>
                </div>

                {/* Authors */}
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Authors: </span>
                  <span className="text-sm text-foreground">{pub.authors.join(", ")}</span>
                </div>

                {/* Abstract */}
                <div className="mb-6 p-4 rounded-lg bg-muted/30">
                  <h4 className="text-sm font-medium text-foreground mb-2">Abstract</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Keywords</h4>
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

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.doi}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on IEEE Xplore
                  </a>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-foreground hover:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-foreground hover:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Citation
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More Publications Coming */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground text-sm">
              More publications in progress. Check back for updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
