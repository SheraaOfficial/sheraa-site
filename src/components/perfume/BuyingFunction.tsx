
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Shield, Truck, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface BuyingFunctionProps {
  price: number;
  discountedPrice?: number;
  hasDiscount?: boolean;
  productName: string;
  productImage?: string;
}

const BuyingFunction: React.FC<BuyingFunctionProps> = ({
  price,
  discountedPrice,
  hasDiscount = false,
  productName,
  productImage
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'tabby'>('stripe');
  const [quantity, setQuantity] = useState(1);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Sharjah',
    emirate: 'Sharjah'
  });
  const { toast } = useToast();

  const finalPrice = hasDiscount && discountedPrice ? discountedPrice : price;
  const totalPrice = finalPrice * quantity;

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const { name, email, phone, address } = customerDetails;
    if (!name || !email || !phone || !address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handlePurchase = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (paymentMethod === 'stripe') {
        // In a real implementation, this would redirect to Stripe Checkout
        const checkoutData = {
          productName,
          quantity,
          totalPrice,
          customerDetails,
          currency: 'AED'
        };
        
        console.log('Processing Stripe payment:', checkoutData);
        
        // Simulate Stripe redirect
        toast({
          title: "Redirecting to Payment...",
          description: "You'll be redirected to our secure payment gateway.",
        });
        
        // Here you would integrate with Stripe
        // window.open('stripe-checkout-url', '_blank');
        
      } else if (paymentMethod === 'tabby') {
        // Tabby Buy Now Pay Later integration
        const tabbyData = {
          productName,
          quantity,
          totalPrice,
          customerDetails,
          installments: 4
        };
        
        console.log('Processing Tabby payment:', tabbyData);
        
        toast({
          title: "Tabby Payment Initiated",
          description: "Redirecting to Tabby for installment payment...",
        });
        
        // Here you would integrate with Tabby
        // window.open('tabby-checkout-url', '_blank');
      }
      
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="p-8 border-2 border-[#C8A165]/30 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-[#165A5A] mb-4">
            Complete Your Purchase
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#C8A165]">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Secure Payment • Fast Delivery</span>
          </div>
        </div>

        {/* Product Summary */}
        <div className="bg-[#F7F3EE] rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#165A5A]">{productName}</h3>
              <p className="text-gray-600">Limited Edition Luxury Collection</p>
            </div>
            <div className="text-right">
              {hasDiscount && (
                <p className="text-lg text-gray-500 line-through">AED {price}</p>
              )}
              <p className="text-2xl font-bold text-[#165A5A]">AED {finalPrice}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="quantity">Quantity:</Label>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xl font-bold text-[#165A5A]">
              Total: AED {totalPrice}
            </div>
          </div>
        </div>

        {/* Customer Details Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={customerDetails.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={customerDetails.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={customerDetails.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+971 XX XXX XXXX"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={customerDetails.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address">Delivery Address *</Label>
            <Input
              id="address"
              value={customerDetails.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter your complete delivery address"
              className="mt-1"
            />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-8">
          <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('stripe')}
              className={`p-4 border rounded-lg flex items-center justify-between transition-all ${
                paymentMethod === 'stripe'
                  ? 'border-[#C8A165] bg-[#C8A165]/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-semibold">Card Payment</p>
                  <p className="text-sm text-gray-600">Visa, Mastercard, etc.</p>
                </div>
              </div>
              {paymentMethod === 'stripe' && <CheckCircle className="w-5 h-5 text-[#C8A165]" />}
            </button>
            
            <button
              onClick={() => setPaymentMethod('tabby')}
              className={`p-4 border rounded-lg flex items-center justify-between transition-all ${
                paymentMethod === 'tabby'
                  ? 'border-[#C8A165] bg-[#C8A165]/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  T
                </div>
                <div className="text-left">
                  <p className="font-semibold">Tabby</p>
                  <p className="text-sm text-gray-600">Buy now, pay in 4</p>
                </div>
              </div>
              {paymentMethod === 'tabby' && <CheckCircle className="w-5 h-5 text-[#C8A165]" />}
            </button>
          </div>
        </div>

        {/* Purchase Button */}
        <Button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-[#C8A165] hover:bg-[#B8956A] text-white py-4 text-lg font-semibold"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing Payment...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Complete Purchase - AED {totalPrice}
            </div>
          )}
        </Button>

        {/* Security & Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure SSL encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Free delivery in UAE</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default BuyingFunction;
