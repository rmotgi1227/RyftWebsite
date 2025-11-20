// ROI Calculator Configuration
// This file contains all configurable parameters for the ROI calculator
// to allow easy updates without modifying the component code

export interface CompetitorMethodConfig {
  label: string;
  setupTimeWeeks: number;
  setupCostRange: {
    min: number;
    max: number;
  };
  ongoingHoursPerMonth: number;
  errorRatePercent: number;
  disputeResolutionHours: number;
  accuracyPercent: number;
}

export interface RyftConfig {
  setupTimeMinutes: number;
  setupCostUsd: number;
  ongoingHoursPerMonth: number;
  errorRatePercent: number;
  disputeResolutionHours: number;
  accuracyPercent: number;
}

export interface PricingConfig {
  smb: {
    monthlyFee: number;
    teamSizeRange: {
      min: number;
      max: number;
    };
  };
  midmarket: {
    monthlyFee: number;
    teamSizeRange: {
      min: number;
      max: number;
    };
  };
  enterprise: {
    customPricing: boolean;
    teamSizeThreshold: number;
  };
}

export interface CalculationConfig {
  // Hourly rates for different roles involved in setup and ongoing work
  hourlyRates: {
    financeOps: number;
    salesOps: number;
    itConsultant: number;
    projectManager: number;
  };
  
  // Setup calculation parameters
  setup: {
    // Roles involved in typical competitor implementation
    rolesInvolved: Array<keyof CalculationConfig['hourlyRates']>;
    // Percentage of setup time that is active work vs waiting
    activeWorkPercentage: number;
    // Risk multiplier for setup cost estimates (accounts for overruns)
    riskMultiplier: number;
  };

  // Ongoing operational parameters
  ongoing: {
    // Percentage time reduction vs competitors
    timeReductionPercent: number;
    // Dispute cost multiplier (time to resolve disputes)
    disputeCostMultiplier: number;
    // Minimum team size for meaningful ROI
    minTeamSizeForPositiveRoi: number;
  };

  // ROI calculation parameters
  roi: {
    // Maximum payback period to display (months)
    maxPaybackMonthsToDisplay: number;
    // Minimum ROI percentage to consider viable
    minViableRoiPercent: number;
    // Time horizon for annual calculations
    calculationTimeHorizonMonths: number;
  };
}

// Main configuration object - all values can be easily updated here
export const roiCalculatorConfig = {
  // Competitor method configurations
  competitorMethods: {
    spreadsheet: {
      label: 'Excel/Google Sheets',
      setupTimeWeeks: 0.5, // Minimal setup but ongoing maintenance is high
      setupCostRange: { min: 0, max: 2000 }, // Internal time investment
      ongoingHoursPerMonth: 25,
      errorRatePercent: 12, // 12% commission error rate
      disputeResolutionHours: 8,
      accuracyPercent: 88
    } as CompetitorMethodConfig,
    
    legacy: {
      label: 'Legacy Software (Spiff/Xactly/CaptivateIQ)',
      setupTimeWeeks: 8, // 2 months average implementation
      setupCostRange: { min: 25000, max: 75000 }, // Setup fees + consulting
      ongoingHoursPerMonth: 12,
      errorRatePercent: 5, // 5% commission error rate
      disputeResolutionHours: 6,
      accuracyPercent: 95
    } as CompetitorMethodConfig,
    
    manual: {
      label: 'Fully Manual Calculations',
      setupTimeWeeks: 0, // No tech setup but lots of ongoing work
      setupCostRange: { min: 0, max: 5000 }, // Process documentation
      ongoingHoursPerMonth: 40,
      errorRatePercent: 18, // 18% commission error rate
      disputeResolutionHours: 12,
      accuracyPercent: 82
    } as CompetitorMethodConfig,
  },

  // RYFT configuration
  ryft: {
    setupTimeMinutes: 5, // Under 5 minutes setup
    setupCostUsd: 0, // No setup fees
    ongoingHoursPerMonth: 2, // Minimal ongoing work required
    errorRatePercent: 0.5, // 0.5% commission error rate
    disputeResolutionHours: 1, // Minimal dispute resolution needed
    accuracyPercent: 99.5
  } as RyftConfig,

  // Pricing configuration
  pricing: {
    smb: {
      monthlyFee: 200,
      teamSizeRange: { min: 1, max: 25 }
    },
    midmarket: {
      monthlyFee: 500,
      teamSizeRange: { min: 26, max: 100 }
    },
    enterprise: {
      customPricing: true,
      teamSizeThreshold: 101
    }
  } as PricingConfig,

  // Calculation parameters
  calculation: {
    hourlyRates: {
      financeOps: 85, // Loaded cost for finance/ops professional
      salesOps: 75, // Loaded cost for sales operations
      itConsultant: 150, // External IT consultant for integrations
      projectManager: 95 // Project manager for implementation
    },
    
    setup: {
      rolesInvolved: ['financeOps', 'salesOps', 'itConsultant', 'projectManager'],
      activeWorkPercentage: 0.6, // 60% of setup time is active work
      riskMultiplier: 1.2 // 20% buffer for cost overruns
    },
    
    ongoing: {
      timeReductionPercent: 70, // 70% reduction in ongoing work
      disputeCostMultiplier: 2, // Disputes take 2x normal resolution time
      minTeamSizeForPositiveRoi: 3 // Minimum viable team size
    },
    
    roi: {
      maxPaybackMonthsToDisplay: 60, // Don't show payback > 5 years
      minViableRoiPercent: 10, // 10% minimum viable ROI
      calculationTimeHorizonMonths: 12 // Calculate annual impact
    }
  } as CalculationConfig
};

// Helper function to get pricing based on team size
export function getPricingForTeamSize(teamSize: number): number {
  const { pricing } = roiCalculatorConfig;
  
  // Handle edge case of 0 team size
  if (teamSize === 0) {
    return 0;
  }
  
  if (teamSize <= pricing.smb.teamSizeRange.max) {
    return pricing.smb.monthlyFee;
  } else if (teamSize <= pricing.midmarket.teamSizeRange.max) {
    return pricing.midmarket.monthlyFee;
  } else {
    // For enterprise, we'll use a graduated pricing model
    // Base enterprise fee + per-user scaling
    const baseEnterpriseFee = 1000;
    const perUserFee = 8;
    return baseEnterpriseFee + (teamSize * perUserFee);
  }
}

// Helper function to calculate weighted hourly rate for setup
export function getSetupHourlyRate(): number {
  const { calculation } = roiCalculatorConfig;
  const rates = calculation.hourlyRates;
  const roles = calculation.setup.rolesInvolved;
  
  // Calculate weighted average of involved roles
  const totalRate = roles.reduce((sum, role) => sum + rates[role], 0);
  return totalRate / roles.length;
}

// Export type for component usage
export type CompetitorMethodKey = keyof typeof roiCalculatorConfig.competitorMethods;